// Engine_Astrolabio
// voces de seno casi puro -> "pozo": reverb FDN de 4 lineas
// con transposicion (giro) y reduccion (polvo) dentro del feedback.

Engine_Astrolabio : CroneEngine {
	var bus, voces, pozo;
	var ultima = 220;
	var vatk = 0.004, vrel = 0.9, vh2 = 0.06, vruido = 0, vglide = 0;

	*new { arg context, doneCallback;
		^super.new(context, doneCallback);
	}

	*synthDefs {
		^[
		SynthDef(\astrolabio_voz, {
			arg out = 0, freq = 220, desde = 220, glide = 0, amp = 0.2, pan = 0,
				atk = 0.004, rel = 0.9, h2 = 0.06, ruido = 0;
			var f, env, sig;
			f = EnvGen.kr(Env([desde, freq], [glide.max(0.0001)], \exp));
			env = EnvGen.ar(Env.perc(atk, rel, 1, -5), doneAction: Done.freeSelf);
			// seno + un poco de 2do/3er armonico (medido: ~-22 dB en graves)
			sig = SinOsc.ar(f) + SinOsc.ar(f * 2, 0, h2) + SinOsc.ar(f * 3, 0, h2 * h2 * 0.5);
			sig = sig + (BPF.ar(PinkNoise.ar, f, 0.08) * ruido * 6);
			sig = LeakDC.ar(sig) * env * amp * AmpCompA.kr(f, 60);
			Out.ar(out, Pan2.ar(sig, pan));
		}),

		SynthDef(\astrolabio_pozo, {
			arg in, out, mezcla = 0.55, decay = 0.9, luz = 2400, tamano = 1, abre = 0.4,
				giro = -12, giro_mezcla = 0.2, polvo = 0, congelar = 0;
			var seco, cong, g, entrada, tiempos, fb, m, lineas, girada, mojado, medio, lado;

			seco = In.ar(in, 2);
			cong = Lag.kr(congelar, 0.08);
			g = (decay * (1 - cong)) + (0.999 * cong);
			entrada = seco * (1 - cong);
			tiempos = [0.0531, 0.0677, 0.0839, 0.1013] * tamano;

			fb = LocalIn.ar(4);
			// Hadamard 4x4 normalizada (ortogonal: no suma energia)
			m = [
				fb[0] + fb[1] + fb[2] + fb[3],
				fb[0] - fb[1] + fb[2] - fb[3],
				fb[0] + fb[1] - fb[2] - fb[3],
				fb[0] - fb[1] - fb[2] + fb[3]
			] * 0.5;

			lineas = 4.collect { |i|
				var x = (entrada[i % 2] * 0.6) + (m[i] * g);
				x = DelayC.ar(x, 0.5,
					tiempos[i] + SinOsc.kr(0.07 + (i * 0.031), i, 0.0021) - ControlDur.ir);
				LPF.ar(x, luz)
			};

			// giro: transposicion dentro del feedback (cada vuelta baja/sube otra vez)
			girada = PitchShift.ar((lineas[0] + lineas[3]) * 0.5, 0.18, giro.midiratio, 0.002, 0.03);
			lineas[1] = (lineas[1] * (1 - giro_mezcla)) + (girada * giro_mezcla);

			// polvo: sample-rate y bits reducidos, mezclados dentro del lazo
			lineas = lineas.collect { |x|
				var c = Latch.ar(x, Impulse.ar(polvo.linexp(0, 1, 30000, 2200)));
				c = c.round(2 ** polvo.linlin(0, 1, -14, -4));
				x + ((c - x) * polvo)
			};

			LocalOut.ar(lineas.collect { |x| LeakDC.ar(x).softclip });

			// abre: ancho estereo de la cola (el reel es casi mono)
			medio = (lineas[0] + lineas[1] + lineas[2] + lineas[3]) * 0.35;
			lado = (lineas[0] + lineas[2] - lineas[1] - lineas[3]) * 0.35 * abre;
			mojado = [medio + lado, medio - lado];
			Out.ar(out, (seco * (1 - mezcla)) + (mojado * mezcla));
		})
		]
	}

	alloc {
		bus = Bus.audio(context.server, 2);
		Engine_Astrolabio.synthDefs.do(_.add);
		context.server.sync;

		voces = Group.new(context.xg, \addToHead);
		pozo = Synth.new(\astrolabio_pozo, [\in, bus, \out, context.out_b], context.xg, \addToTail);

		// nota: freq, amp, pan, brillo (multiplica el armonico)
		this.addCommand(\nota, "ffff", { |msg|
			var f = msg[1];
			Synth.new(\astrolabio_voz, [
				\out, bus, \freq, f, \desde, ultima, \glide, vglide,
				\amp, msg[2], \pan, msg[3],
				\atk, vatk, \rel, vrel, \h2, (vh2 * msg[4]).min(0.9), \ruido, vruido
			], voces);
			ultima = f;
		});

		this.addCommand(\ataque, "f", { |msg| vatk = msg[1] });
		this.addCommand(\caida, "f", { |msg| vrel = msg[1] });
		this.addCommand(\armonico, "f", { |msg| vh2 = msg[1] });
		this.addCommand(\ruido, "f", { |msg| vruido = msg[1] });
		this.addCommand(\glide, "f", { |msg| vglide = msg[1] });

		[\mezcla, \decay, \luz, \tamano, \abre, \giro, \giro_mezcla, \polvo, \congelar].do { |k|
			this.addCommand(k, "f", { |msg| pozo.set(k, msg[1]) });
		};
	}

	free {
		pozo.free;
		voces.free;
		bus.free;
	}
}
