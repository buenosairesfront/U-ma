# astrolabio

Arpegio de senos casi puros que orbita alrededor de un pozo oscuro.

Las notas del acorde son estrellas fijas sobre una elipse. Un cometa recorre la órbita y toca cada estrella al pasar. Como sigue la 2.ª ley de Kepler, cerca del pozo (periastro) va rápido y suena más brillante, y lejos se arrastra. Con excentricidad 0 es un arpegio parejo; si la subís, el ritmo acelera y frena solo, sin swing programado.

El pozo es una reverb FDN de 4 líneas con dos cosas dentro del feedback:

- **giro:** transposición (por defecto −12). Cada vuelta de la cola baja una octava más.
- **polvo:** reducción de bits y de frecuencia de muestreo.

El timbre y los valores por defecto salen del análisis de un reel de referencia: arpegio de G maj7/6 en 4 octavas, ~8,2 notas/s, senos con el 2.º armónico ~−22 dB y una reverb casi mono.

## controles

| | ORBITA | PULSO | POZO | GIRO |
|---|---|---|---|---|
| E2 | excentricidad | notas/pulso | decaimiento | giro (st) |
| E3 | periastro (gira la órbita) | huecos | luz | polvo |
| K2 | acorde | modo (vaivén / rueda / estrella) | tamaño | mezcla del giro |
| K3 | sentido | pausa | congelar | congelar |

- **E1:** cambia de página.
- **K1 + K3:** congela el pozo desde cualquier página.
- **MIDI in:** la nota que entra pasa a ser la raíz.

El modo **estrella** recorre las notas con un salto áureo, como un polígono estrellado.

## instalar

Copiá la carpeta `astrolabio` a `dust/code/` y reiniciá la norns para que compile el engine.

## escuchar

En `docs/` están los renders hechos con el engine real (SuperCollider en NRT):

- `1_circular.mp3`: órbita circular, lo más parecido al reel.
- `2_kepler.mp3`: excentricidad 0.55.
- `3_congelar_polvo.mp3`: pozo congelado a los 7 s, con polvo y más giro.
