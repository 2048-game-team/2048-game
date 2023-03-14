import { useEffect, useState } from 'react';
import { baseUrl } from 'shared/envConsts';

interface MusicProps {
  url: string;
  volume: number;
}

export const useMusic = ({ url, volume }: MusicProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (volume > 0) {
      setAudio(new Audio(`${baseUrl}${url}`));
    }
  }, []);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = volume;
      audio.play();
    }
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);
};
