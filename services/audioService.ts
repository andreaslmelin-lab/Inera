/**
 * Spelar upp ljudeffekter med Web Audio API. Detta skapar enkla toner
 * utan att behöva ladda externa ljudfiler.
 */

let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
    if (typeof window === 'undefined') return null;

    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        } catch (e) {
            console.error("Web Audio API is not supported in this browser");
            return null;
        }
    }
    return audioContext;
};


export const playAudio = (soundFileName: 'correct.mp3' | 'wrong.mp3' | 'chapter-start-loop.mp3'): void => {
  const context = getAudioContext();
  if (!context) return;

  // Web Audio API kräver en användarinteraktion för att starta.
  // Detta återupptar kontexten om den är vilande.
  if (context.state === 'suspended') {
    context.resume();
  }
  
  const now = context.currentTime;
  const gainNode = context.createGain();
  gainNode.connect(context.destination);
  gainNode.gain.setValueAtTime(0.2, now); // Justera volymen här

  switch (soundFileName) {
    case 'correct.mp3': {
      const oscillator = context.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, now); // En högre, positiv ton
      oscillator.connect(gainNode);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      oscillator.start(now);
      oscillator.stop(now + 0.3);
      break;
    }
    case 'wrong.mp3': {
      const oscillator = context.createOscillator();
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(220, now); // En lägre, dov ton
      oscillator.connect(gainNode);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      oscillator.start(now);
      oscillator.stop(now + 0.4);
      break;
    }
    case 'chapter-start-loop.mp3': {
      // Spelar en kort stigande arpeggio istället för en loop
      const freqs = [392, 523, 659]; // G4, C5, E5
      freqs.forEach((freq, i) => {
        const osc = context.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.1);
        osc.connect(gainNode);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.1);
      });
      break;
    }
  }
};
