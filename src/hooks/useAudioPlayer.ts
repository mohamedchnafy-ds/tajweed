import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = (srcUrl?: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isLooping, setIsLooping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!srcUrl) return;

    const audio = new Audio(srcUrl);
    audioRef.current = audio;
    audio.playbackRate = playbackRate;
    audio.loop = isLooping;

    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleEnded = () => {
      if (!isLooping) setIsPlaying(false);
    };
    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);
    };

    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, [srcUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
    }
  }, [isLooping]);

  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (err) {
      console.warn('Audio play error', err);
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const toggleSpeed = () => {
    const nextRate = playbackRate === 1.0 ? 0.75 : playbackRate === 0.75 ? 0.5 : 1.0;
    setPlaybackRate(nextRate);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  return {
    isPlaying,
    isLoading,
    playbackRate,
    isLooping,
    togglePlay,
    toggleSpeed,
    toggleLoop,
  };
};
