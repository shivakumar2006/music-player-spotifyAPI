import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants'; 
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

const Discover = () => {
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const dispatch = useDispatch();
    const { data, isFetching, error } = useGetTopChartsQuery();
    const genreTitle = "pop";

    if (isFetching) return <Loader title="Loading Songs..." />;

    if (error) return <Error />;

    console.log("Data from API", data);

    return (
        <div className="flex flex-col">
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select 
                    onChange={() => {}}
                    value=""
                    className='bg-black text-gray-300 p-3 text-5m rounded-lg outline-none sm:mt-0 mt-5'    
                >
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>{genre.title}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.albums?.items.map((song, i) => (
                    <SongCard 
                        key={song.data.uri} // Use a unique identifier
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        data={data}
                        album={song} // Pass the full album object
                        i={i}    
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
