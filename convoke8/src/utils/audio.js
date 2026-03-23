// ====================================
// CONVOKE 8.0 — Retro Audio Engine
// Web Audio API synthesized sounds
// ====================================

let audioCtx = null;

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Single typing beep — short square wave blip
export function playTypeBeep() {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'square';
    osc.frequency.value = 350 + Math.random() * 200;
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.02);
  } catch (e) {
    // Silently fail — audio is non-critical
  }
}

// Circuit / electricity crackle — short burst of noise
export function playCircuitNoise() {
  try {
    const ctx = getCtx();
    const duration = 0.15 + Math.random() * 0.2;

    // Create noise via buffer
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Bandpass filter for electric sizzle
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000 + Math.random() * 3000;
    filter.Q.value = 5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(ctx.currentTime);
  } catch (e) {
    // Silently fail
  }
}

// Section transition buzz — deeper electrical hum
export function playSectionBuzz() {
  try {
    const ctx = getCtx();

    // Low hum oscillator
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 60 + Math.random() * 40;

    // High crackle
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.value = 800 + Math.random() * 400;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.025, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.015, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.25);
    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.12);

    // Add a crackle after a tiny delay
    setTimeout(() => playCircuitNoise(), 80 + Math.random() * 120);
  } catch (e) {
    // Silently fail
  }
}

// Selection/confirmation beep — higher pitched melodic tone
export function playSelectSound() {
  try {
    const ctx = getCtx();
    const now = ctx.currentTime;

    // First note - higher pitch
    const osc1 = ctx.createOscillator();
    osc1.type = 'square';
    osc1.frequency.value = 523; // C5
    
    const gain1 = ctx.createGain();
    gain1.gain.setValueAtTime(0.04, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.1);

    // Second note - even higher pitch, starts slightly after first
    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.value = 659; // E5
    
    const gain2 = ctx.createGain();
    gain2.gain.setValueAtTime(0.04, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.18);
  } catch (e) {
    // Silently fail — audio is non-critical
  }
}
