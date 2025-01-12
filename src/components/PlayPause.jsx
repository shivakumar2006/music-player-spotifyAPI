import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  console.log("PlayPause Props:", { isPlaying, activeSong, song });

  return (
    isPlaying && activeSong?.name === song?.name ? (
      <FaPauseCircle 
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      />
    ) : (
      <FaPlayCircle 
        size={35}
        className="text-gray-300"
        onClick={handlePlay}
      />
    )
  );
};

export default PlayPause;
