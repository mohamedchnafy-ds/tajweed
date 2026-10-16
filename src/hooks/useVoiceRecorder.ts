import { useState, useRef, useEffect } from 'react';

export const useVoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [permissionError, setPermissionError] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const userAudioPlayerRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
      if (userAudioPlayerRef.current) userAudioPlayerRef.current.pause();
    };
  }, [recordedUrl]);

  const startRecording = async () => {
    setPermissionError(null);
    audioChunksRef.current = [];
    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl);
      setRecordedUrl(null);
    }

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Votre navigateur ne prend pas en charge l\'enregistrement audio.');
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setRecordedUrl(url);
        setIsRecording(false);
        // Stop all tracks in stream
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start(100);
      setIsRecording(true);
      setRecordSeconds(0);

      timerRef.current = window.setInterval(() => {
        setRecordSeconds(prev => prev + 1);
      }, 1000);
    } catch (err: any) {
      console.error('Microphone error:', err);
      setPermissionError(err.message || 'Accès au micro refusé ou non disponible.');
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  };

  const playRecordedAudio = () => {
    if (!recordedUrl) return;

    if (isPlayingRecording && userAudioPlayerRef.current) {
      userAudioPlayerRef.current.pause();
      setIsPlayingRecording(false);
      return;
    }

    const audio = new Audio(recordedUrl);
    userAudioPlayerRef.current = audio;
    audio.onended = () => setIsPlayingRecording(false);
    audio.play();
    setIsPlayingRecording(true);
  };

  const clearRecording = () => {
    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl);
      setRecordedUrl(null);
    }
    setRecordSeconds(0);
  };

  return {
    isRecording,
    recordedUrl,
    isPlayingRecording,
    recordSeconds,
    permissionError,
    startRecording,
    stopRecording,
    playRecordedAudio,
    clearRecording,
  };
};
