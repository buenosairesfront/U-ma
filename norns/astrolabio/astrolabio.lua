-- astrolabio
-- arpegio de senos en orbita
-- kepleriana alrededor de un
-- pozo oscuro
--
-- las notas son estrellas fijas;
-- un cometa las recorre y las
-- toca al pasar. cerca del pozo
-- va rapido y brilla, lejos
-- se arrastra (2da ley de Kepler)
--
-- E1 pagina
-- E2 E3 parametros
-- K2 K3 acciones de pagina
-- K1+K3 congelar el pozo
-- MIDI in: transpone la raiz

engine.name = "Astrolabio"

local musicutil = require "musicutil"

local TAU = math.pi * 2

local ACORDES = {
  {"maj7/6",    {0, 4, 7, 9, 11}},
  {"m9",        {0, 3, 7, 10, 14}},
  {"lidio",     {0, 4, 6, 7, 11}},
  {"sus 2/4",   {0, 2, 5, 7}},
  {"cuartas",   {0, 5, 10, 15, 20}},
  {"hirajoshi", {0, 2, 3, 7, 8}},
  {"tritono",   {0, 1, 6, 7}},
}
local MODOS = {"vaiven", "rueda", "estrella"}
local SUBDIV = {1, 2, 3, 4, 6, 8}
local TAMANOS = {0.6, 1, 1.7}

local PAGINAS = {
  {nombre = "ORBITA", e2 = "excentricidad", e3 = "periastro", k2 = "acorde", k3 = "sentido"},
  {nombre = "PULSO",  e2 = "subdiv",        e3 = "huecos",    k2 = "modo",   k3 = "pausa"},
  {nombre = "POZO",   e2 = "decaimiento",   e3 = "luz",       k2 = "tamano", k3 = "congelar"},
  {nombre = "GIRO",   e2 = "giro",          e3 = "polvo",     k2 = "mezcla", k3 = "congelar"},
}
local ETIQ = {
  excentricidad = "excentr", periastro = "periastro", subdiv = "notas/pulso",
  huecos = "huecos", decaimiento = "decaim", luz = "luz",
  giro = "giro", polvo = "polvo",
}

local pagina = 1
local nu = 0            -- anomalia verdadera del cometa
local sentido = 1
local pausa = false
local k1 = false
local notas = {}
local S = 1             -- cantidad de estrellas (slots) en la orbita
local destellos = {}
local estela = {}
local tf = {s = 1, ox = 84, oy = 32}
local fase_giro = 0
local motor, pantalla_m

-- geometria (a = 1, foco = pozo en el origen) ---------------------

local function radio(v, e)
  return (1 - e * e) / (1 + e * math.cos(v))
end

-- punto de la orbita en el angulo de pantalla phi
local function punto(phi, e, w)
  local r = radio(phi - w, e)
  return r * math.cos(phi), -r * math.sin(phi)
end

local function ajustar(e, w)
  local x0, x1, y0, y1 = 0, 0, 0, 0
  for i = 0, 71 do
    local x, y = punto(i / 72 * TAU, e, w)
    x0, x1 = math.min(x0, x), math.max(x1, x)
    y0, y1 = math.min(y0, y), math.max(y1, y)
  end
  tf.s = math.min(82 / (x1 - x0), 56 / (y1 - y0))
  tf.ox = 85 - (x0 + x1) / 2 * tf.s
  tf.oy = 32 - (y0 + y1) / 2 * tf.s
end

local function aPantalla(x, y)
  return tf.ox + x * tf.s, tf.oy + y * tf.s
end

-- notas -----------------------------------------------------------

local function mcd(a, b)
  while b ~= 0 do a, b = b, a % b end
  return a
end

local function salto(K)
  local p = math.max(1, math.floor(K * 0.382 + 0.5)) -- salto aureo
  while mcd(p, K) ~= 1 do p = p + 1 end
  return p
end

local function construir()
  local raiz = params:get("raiz")
  local ints = ACORDES[params:get("acorde")][2]
  local oct = params:get("octavas")
  local hay, lista = {}, {}
  for o = 0, oct - 1 do
    for _, iv in ipairs(ints) do
      local n = raiz + 12 * o + iv
      if n <= raiz + 12 * oct and n <= 120 and not hay[n] then
        hay[n] = true
        table.insert(lista, n)
      end
    end
  end
  table.sort(lista)
  notas = lista
  local K = #notas
  if params:get("modo") == 1 then S = math.max(2, 2 * K - 2) else S = K end
  destellos = {}
  for i = 1, S do destellos[i] = 0 end
end

local function nota_de(s)
  local K = #notas
  local modo = params:get("modo")
  if modo == 1 then
    if K < 2 then return 1 end
    if s < K then return s + 1 else return 2 * K - 1 - s end
  elseif modo == 2 then
    return s + 1
  else
    return (s * salto(K)) % K + 1
  end
end

-- movimiento ------------------------------------------------------

local function disparar(j)
  local s = j % S
  local idx = nota_de(s)
  if math.random() < params:get("huecos") then
    destellos[s + 1] = 5
    return
  end
  destellos[s + 1] = 15
  local e = params:get("excentricidad")
  local w = math.rad(params:get("periastro"))
  local r = radio(nu, e)
  local brillo = util.clamp(1 / r, 0.4, 3)          -- cerca del pozo: mas armonicos
  local x = math.cos(nu + w) * r / (1 + e)
  local pan = util.clamp(x * params:get("ancho"), -1, 1)
  local amp = params:get("nivel") * 0.9
  engine.nota(musicutil.note_num_to_freq(notas[idx]), amp, pan, brillo)
end

local function avanzar(dt)
  if pausa or #notas == 0 then return end
  local e = params:get("excentricidad")
  local w = math.rad(params:get("periastro"))
  local nps = SUBDIV[params:get("subdiv")] * clock.get_tempo() / 60
  local T = S / nps
  local k = TAU * (1 - e * e) ^ -1.5 / T          -- periodo medio = T
  local paso = TAU / S
  local antes = nu + w
  nu = nu + sentido * k * (1 + e * math.cos(nu)) ^ 2 * dt
  local ahora = nu + w
  if sentido > 0 then
    for j = math.floor(antes / paso) + 1, math.floor(ahora / paso) do disparar(j) end
  else
    for j = math.ceil(antes / paso) - 1, math.ceil(ahora / paso), -1 do disparar(j) end
  end
  nu = nu % TAU
end

-- parametros ------------------------------------------------------

local function agregar_params()
  params:add_separator("astrolabio")

  params:add_group("orbita", 8)
  params:add_number("raiz", "raiz", 24, 72, 43,
    function(p) return musicutil.note_num_to_name(p:get(), true) end)
  params:set_action("raiz", construir)
  local nombres = {}
  for i, a in ipairs(ACORDES) do nombres[i] = a[1] end
  params:add_option("acorde", "acorde", nombres, 1)
  params:set_action("acorde", construir)
  params:add_number("octavas", "octavas", 1, 5, 4)
  params:set_action("octavas", construir)
  params:add_option("modo", "modo", MODOS, 1)
  params:set_action("modo", construir)
  params:add_option("subdiv", "notas/pulso", {"1", "2", "3", "4", "6", "8"}, 4)
  params:add_control("excentricidad", "excentricidad", controlspec.new(0, 0.85, "lin", 0.01, 0))
  local w_prev = 0
  params:add_control("periastro", "periastro",
    controlspec.new(0, 360, "lin", 1, 0, "", 1 / 360, true))
  params:set_action("periastro", function(v)
    -- el cometa se queda donde esta en pantalla; gira la orbita debajo
    nu = (nu - math.rad(v - w_prev)) % TAU
    w_prev = v
  end)
  params:add_control("huecos", "huecos", controlspec.new(0, 0.9, "lin", 0.01, 0))

  params:add_group("voz", 7)
  params:add_control("nivel", "nivel", controlspec.new(0, 1, "lin", 0.01, 0.6))
  params:add_control("ancho", "ancho estereo", controlspec.new(0, 1, "lin", 0.01, 0.3))
  params:add_control("ataque", "ataque", controlspec.new(0.001, 0.2, "exp", 0, 0.004, "s"))
  params:set_action("ataque", function(v) engine.ataque(v) end)
  params:add_control("caida", "caida", controlspec.new(0.05, 3, "exp", 0, 0.9, "s"))
  params:set_action("caida", function(v) engine.caida(v) end)
  params:add_control("armonico", "armonico", controlspec.new(0, 0.5, "lin", 0.01, 0.04))
  params:set_action("armonico", function(v) engine.armonico(v) end)
  params:add_control("ruido", "ruido", controlspec.new(0, 1, "lin", 0.01, 0))
  params:set_action("ruido", function(v) engine.ruido(v) end)
  params:add_control("glide", "glide", controlspec.new(0, 0.3, "lin", 0.001, 0, "s"))
  params:set_action("glide", function(v) engine.glide(v) end)

  params:add_group("pozo", 9)
  params:add_control("mezcla", "mezcla", controlspec.new(0, 1, "lin", 0.01, 0.55))
  params:set_action("mezcla", function(v) engine.mezcla(v) end)
  params:add_control("decaimiento", "decaimiento", controlspec.new(0.3, 0.98, "lin", 0.01, 0.9))
  params:set_action("decaimiento", function(v) engine.decay(v) end)
  params:add_control("luz", "luz", controlspec.new(500, 12000, "exp", 0, 2400, "hz"))
  params:set_action("luz", function(v) engine.luz(v) end)
  params:add_option("tamano", "tamano", {"chico", "medio", "grande"}, 2)
  params:set_action("tamano", function(i) engine.tamano(TAMANOS[i]) end)
  params:add_control("abre", "abre (estereo pozo)", controlspec.new(0, 1, "lin", 0.01, 0.4))
  params:set_action("abre", function(v) engine.abre(v) end)
  params:add_number("giro", "giro", -24, 12, -12,
    function(p) local v = p:get(); return (v > 0 and "+" or "") .. v .. " st" end)
  params:set_action("giro", function(v) engine.giro(v) end)
  params:add_control("giro_mezcla", "giro mezcla", controlspec.new(0, 1, "lin", 0.01, 0.2))
  params:set_action("giro_mezcla", function(v) engine.giro_mezcla(v) end)
  params:add_control("polvo", "polvo", controlspec.new(0, 1, "lin", 0.01, 0))
  params:set_action("polvo", function(v) engine.polvo(v) end)
  params:add_binary("congelar", "congelar", "toggle", 0)
  params:set_action("congelar", function(v) engine.congelar(v) end)
end

-- entrada ---------------------------------------------------------

function enc(n, d)
  if n == 1 then
    pagina = util.clamp(pagina + d, 1, #PAGINAS)
  else
    local p = PAGINAS[pagina]
    params:delta(n == 2 and p.e2 or p.e3, d)
  end
end

local function rotar(id, n)
  params:set(id, params:get(id) % n + 1)
end

function key(n, z)
  if n == 1 then k1 = (z == 1); return end
  if z == 0 then return end
  if n == 3 and k1 then
    params:set("congelar", 1 - params:get("congelar"))
    return
  end
  local accion = (n == 2) and PAGINAS[pagina].k2 or PAGINAS[pagina].k3
  if accion == "acorde" then rotar("acorde", #ACORDES)
  elseif accion == "sentido" then sentido = -sentido
  elseif accion == "modo" then rotar("modo", #MODOS)
  elseif accion == "pausa" then pausa = not pausa
  elseif accion == "tamano" then rotar("tamano", #TAMANOS)
  elseif accion == "mezcla" then
    local v = params:get("giro_mezcla")
    params:set("giro_mezcla", v < 0.15 and 0.2 or (v < 0.45 and 0.5 or 0))
  elseif accion == "congelar" then
    params:set("congelar", 1 - params:get("congelar"))
  end
end

-- pantalla --------------------------------------------------------

local function texto_k(nombre)
  if nombre == "acorde" then return ACORDES[params:get("acorde")][1]
  elseif nombre == "modo" then return MODOS[params:get("modo")]
  elseif nombre == "sentido" then return sentido > 0 and "<-" or "->"
  elseif nombre == "pausa" then return pausa and "quieto" or "gira"
  elseif nombre == "tamano" then return params:string("tamano")
  elseif nombre == "mezcla" then return "mez " .. math.floor(params:get("giro_mezcla") * 100)
  end
  return nombre
end

local function dibujar_pozo(fx, fy)
  local cong = params:get("congelar") == 1
  local rad = 2 + math.floor(params:get("decaimiento") * 4)
  -- halos: tantos como la mezcla
  local halos = math.floor(params:get("mezcla") * 3 + 0.5)
  for h = halos, 1, -1 do
    screen.level(cong and (3 + h) or h)
    screen.circle(fx, fy, rad + h * 3)
    screen.stroke()
  end
  screen.level(0)
  screen.circle(fx, fy, rad)
  screen.fill()
  screen.level(cong and 15 or 6)
  screen.circle(fx, fy, rad)
  screen.stroke()
  -- giro: marcas que rotan, sentido segun el signo
  local g = params:get("giro")
  if g ~= 0 and params:get("giro_mezcla") > 0 then
    screen.level(3)
    for i = 0, 2 do
      local a = fase_giro + i * TAU / 3
      local r1, r2 = rad + 1, rad + 4
      screen.move(fx + math.cos(a) * r1, fy + math.sin(a) * r1)
      screen.line(fx + math.cos(a) * r2, fy + math.sin(a) * r2)
      screen.stroke()
    end
  end
  -- polvo: pixeles sueltos alrededor
  local pv = params:get("polvo")
  if pv > 0 then
    screen.level(4)
    for _ = 1, math.floor(pv * 14) do
      local a, d = math.random() * TAU, rad + math.random(1, 9)
      screen.pixel(math.floor(fx + math.cos(a) * d), math.floor(fy + math.sin(a) * d))
      screen.fill()
    end
  end
end

function redraw()
  screen.clear()
  screen.aa(0)
  screen.line_width(1)
  screen.font_face(1)
  screen.font_size(8)

  local e = params:get("excentricidad")
  local w = math.rad(params:get("periastro"))
  ajustar(e, w)
  local fx, fy = aPantalla(0, 0)

  -- orbita punteada
  screen.level(2)
  for i = 0, 95, 2 do
    local x, y = aPantalla(punto(i / 96 * TAU, e, w))
    screen.pixel(math.floor(x), math.floor(y))
    screen.fill()
  end

  -- radio vector (barre areas iguales en tiempos iguales)
  local cx, cy = aPantalla(punto(nu + w, e, w))
  screen.level(1)
  screen.move(fx, fy)
  screen.line(cx, cy)
  screen.stroke()

  dibujar_pozo(fx, fy)

  -- estrellas (notas)
  local K = #notas
  for s = 0, S - 1 do
    local x, y = aPantalla(punto(s / S * TAU, e, w))
    x, y = math.floor(x), math.floor(y)
    local idx = nota_de(s)
    local base = 2 + math.floor((idx - 1) / math.max(1, K - 1) * 6)
    local d = destellos[s + 1] or 0
    if d > base then
      screen.level(d)
      screen.rect(x - 1, y - 1, 3, 3)
      screen.fill()
    else
      screen.level(base)
      screen.pixel(x, y)
      screen.fill()
    end
  end

  -- estela + cometa
  for i = #estela, 1, -1 do
    screen.level(math.max(1, 12 - i))
    screen.pixel(math.floor(estela[i][1]), math.floor(estela[i][2]))
    screen.fill()
  end
  screen.level(15)
  screen.rect(math.floor(cx) - 1, math.floor(cy) - 1, 2, 2)
  screen.fill()

  -- panel izquierdo
  screen.level(0)
  screen.rect(0, 0, 40, 64)
  screen.fill()
  local p = PAGINAS[pagina]
  screen.level(15)
  screen.move(0, 7)
  screen.text(p.nombre)
  for i = 1, #PAGINAS do
    screen.level(i == pagina and 15 or 2)
    screen.rect((i - 1) * 5, 10, 3, 1)
    screen.fill()
  end
  screen.level(3)
  screen.move(0, 21)
  screen.text(ETIQ[p.e2])
  screen.level(15)
  screen.move(0, 29)
  screen.text(params:string(p.e2))
  screen.level(3)
  screen.move(0, 39)
  screen.text(ETIQ[p.e3])
  screen.level(15)
  screen.move(0, 47)
  screen.text(params:string(p.e3))

  if params:get("congelar") == 1 then
    screen.level(15)
    screen.move(0, 63)
    screen.text("CONGELADO")
  else
    screen.level(5)
    screen.move(0, 56)
    screen.text(texto_k(p.k2))
    screen.move(0, 63)
    screen.text(texto_k(p.k3))
  end

  screen.update()
end

-- midi: la nota que entra pasa a ser la raiz ----------------------

local function midi_evento(data)
  local m = midi.to_msg(data)
  if m.type == "note_on" and m.vel > 0 then
    local n = m.note
    while n > 72 do n = n - 12 end
    while n < 24 do n = n + 12 end
    params:set("raiz", n)
  end
end

-- init ------------------------------------------------------------

function init()
  agregar_params()
  params:bang()
  construir()

  for i = 1, 16 do
    local d = midi.connect(i)
    d.event = midi_evento
  end

  motor = metro.init(function() avanzar(1 / 100) end, 1 / 100)
  motor:start()

  pantalla_m = metro.init(function()
    for i = 1, #destellos do destellos[i] = math.max(0, destellos[i] - 1) end
    local e = params:get("excentricidad")
    local w = math.rad(params:get("periastro"))
    local x, y = aPantalla(punto(nu + w, e, w))
    table.insert(estela, 1, {x, y})
    if #estela > 14 then table.remove(estela) end
    local g = params:get("giro")
    fase_giro = fase_giro + (g < 0 and -0.12 or 0.12) * (math.abs(g) / 12)
    redraw()
  end, 1 / 30)
  pantalla_m:start()
end

function cleanup()
  if motor then motor:stop() end
  if pantalla_m then pantalla_m:stop() end
end
