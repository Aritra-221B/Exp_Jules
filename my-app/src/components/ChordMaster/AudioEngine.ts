export class AudioEngine {
  private audioContext: AudioContext;
  private buffers: Map<string, AudioBuffer> = new Map();

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }

  resume() {
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }
  }

  async loadSounds(soundMap: { [note: string]: string }) {
    for (const note in soundMap) {
      const url = soundMap[note];
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.buffers.set(note, audioBuffer);
      } catch (error) {
        console.error(`Error loading sound for note ${note}:`, error);
      }
    }
  }

  playSound(note: string) {
    this.resume();
    const buffer = this.buffers.get(note);
    if (buffer) {
      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      source.start(0);
    }
  }

  playChord(notes: string[]) {
    this.resume();
    for (const note of notes) {
      this.playSound(note);
    }
  }
}
