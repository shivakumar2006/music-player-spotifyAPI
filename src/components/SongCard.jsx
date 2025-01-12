import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ album, i, activeSong }) => {
  const albumData = album?.data; // Get album data

  if (!albumData) return null; // Return null if no album data

  // Access coverArt from the sources array
  const coverArt = albumData?.coverArt?.sources[2]?.url;  // Using the highest resolution image

  if (!coverArt) return null; // If no cover art, return null

  const albumDate = albumData?.date?.year;
  const artistName = albumData?.artists?.items?.[0]?.profile?.name;

  console.log(albumData)

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
      <div className='relative w-full h-56 group'>
        <div 
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
          ${activeSong?.title === albumData?.name ? 'flex bg-black bg-opacity-70' : "hidden"}`}
        >
          <PlayPause />
        </div>
        <img alt='song_img' src={coverArt} /> {/* Use the coverArt URL */}
      </div>
      <div className="mt-4 flex flex-col">
        <p className='font-semibold text-lg text-black truncate'>
          <Link to={`/songs/${albumData?.url}`}>
            {albumData?.name}
          </Link>
        </p>
        {artistName && <p className='text-gray-300 text-sm'>{artistName || "Unknown Artist"}</p>}
        {albumDate && <p className='text-grey-300 text-sm'>{albumDate}</p>}
      </div>
    </div>
  );
};

export default SongCard;
 