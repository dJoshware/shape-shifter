// Karplus-Strong plucked string synthesis via Web Audio API

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
    if (!audioCtx || audioCtx.state === 'closed') {
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

// Open-string frequencies for standard EADGBE tuning, index 0 = string 0 (high e)
const OPEN_STRING_FREQS = [329.63, 246.94, 196.0, 146.83, 110.0, 82.41];

export function noteFrequency(
    stringIndex: number,
    fret: number,
    tuning = OPEN_STRING_FREQS,
): number {
    const open = tuning[stringIndex] ?? 329.63;
    return open * Math.pow(2, fret / 12);
}

function pluck(
    ctx: AudioContext,
    frequency: number,
    gainValue = 0.6,
    startTime = 0,
): void {
    const sampleRate = ctx.sampleRate;
    const N = Math.max(2, Math.round(sampleRate / frequency));
    const duration = 3; // seconds of buffer
    const bufferSize = Math.ceil(sampleRate * duration);

    const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
    const data = buffer.getChannelData(0);

    // Seed the delay line with white noise (the "pluck" excitation)
    const delayLine = new Float32Array(N);
    for (let i = 0; i < N; i++) {
        delayLine[i] = Math.random() * 2 - 1;
    }

    // Karplus-Strong: output + low-pass averaging feedback loop
    // decay factor slightly below 0.5 gives a natural-sounding sustain
    const decay = 0.4985;
    let prev = delayLine[N - 1];
    for (let i = 0; i < bufferSize; i++) {
        const idx = i % N;
        const current = delayLine[idx];
        data[i] = current;
        delayLine[idx] = decay * (current + prev);
        prev = current;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Light high-shelf cut to soften the attack edge
    const eq = ctx.createBiquadFilter();
    eq.type = 'highshelf';
    eq.frequency.value = 4000;
    eq.gain.value = -6;

    // Gentle reverb via a short convolver approximation using a gain node + delay
    const delay = ctx.createDelay(0.08);
    delay.delayTime.value = 0.06;
    const delayGain = ctx.createGain();
    delayGain.gain.value = 0.18;
    const dryGain = ctx.createGain();
    dryGain.gain.value = gainValue;

    source.connect(eq);
    eq.connect(dryGain);
    eq.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(ctx.destination);
    dryGain.connect(ctx.destination);

    source.start(startTime);
}

export function playNote(
    stringIndex: number,
    fret: number,
    tuningFreqs?: number[],
): void {
    const ctx = getAudioContext();
    const freq = noteFrequency(stringIndex, fret, tuningFreqs);
    pluck(ctx, freq);
}

export function playChord(
    notes: { string: number; fret: number }[],
    tuningFreqs?: number[],
): void {
    if (!notes.length) return;
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    notes.forEach(note => {
        pluck(
            ctx,
            noteFrequency(note.string, note.fret, tuningFreqs),
            0.55,
            now,
        );
    });
}
