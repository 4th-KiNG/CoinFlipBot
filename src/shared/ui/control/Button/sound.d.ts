declare module 'use-sound' {
    interface UseSoundOptions {
      volume?: number;
    }
  
    export default function useSound(sound: string | Sound, options?: UseSoundOptions): [() => void, any];
  }