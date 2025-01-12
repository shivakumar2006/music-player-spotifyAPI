/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from "react";

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  }, [seekTime]);

  useEffect(() => {
    console.log("Active Song:", activeSong);
    console.log("Audio Source URL:", activeSong?.hub?.actions[1]?.uri || activeSong?.uri);
  }, [activeSong]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri || activeSong?.uri || ""}
      ref={audioRef}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      onError={(e) => {
        console.error("Audio Error:", e);
      }}
    />
  );
};

export default Player;
