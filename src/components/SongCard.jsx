import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ album, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    console.log("Dispatching setActiveSong:", album?.data);
    dispatch(setActiveSong({ song: album?.data, data, i }));
    dispatch(playPause(true));
  };

  const albumData = album?.data; // Get album data

  if (!albumData) return null; // Return null if no album data

  // Access coverArt from the sources array
  const coverArt = albumData?.coverArt?.sources[2]?.url; // Using the highest resolution image

  if (!coverArt) return null; // If no cover art, return null

  const albumDate = albumData?.date?.year;
  
  // Check if the artists data exists and map over it correctly
  const artistName = albumData?.artists?.items?.map(artist => artist?.profile?.name).join(', ') || "Unknown Artist";

console.log("Dispatching setActiveSong:", album?.data);
console.log("Dispatching playPause:", true);  // Or false, depending on action
console.log("Active song in Player:", activeSong);
console.log("Active Song URI:", activeSong?.hub?.actions);
console.log("isPlaying in SongCard:", isPlaying);
console.log("PlayPause clicked", { isPlaying, activeSong });



  return (
    <div className='flex flex-col w-[250px] p-4 bg-white bg-opacity-20 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div 
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
          ${isPlaying && activeSong?.name === albumData?.name ? 'flex bg-black bg-opacity-70' : "hidden"}`}
        >
          <PlayPause 
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={albumData}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt='song_img' src={coverArt} /> {/* Use the coverArt URL */}
      </div>
      <div className="mt-4 flex flex-col">
        <p className='font-semibold text-lg text-white truncate'>
          <Link to={`/songs/${albumData?.uri}`}>
            {albumData?.name}
          </Link>
        </p>
        {artistName && <p className='text-white text-sm'>{artistName}</p>}
        {albumDate && <p className='text-white text-sm'>{albumDate}</p>}
      </div>
    </div>
  );
};

export default SongCard;
