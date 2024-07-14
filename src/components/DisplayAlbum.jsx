import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { albumsData, assets, songsData } from '../assets/assets';
import { usePlayerContext } from '../hooks/use-PlayerContext';

function DisplayAlbum() {
    const {playWithId}=usePlayerContext()

    const { id } = useParams();
    const albumData = albumsData.find((album) => album.id === Number(id));
    

    return (
        <>
            <Navbar />

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
                <img
                    className="w-48 rounded"
                    src={albumData.image}
                    alt={albumData.name}
                />

                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="mb-4 text-5xl font-bold md:text-7xl">
                        {albumData.name}
                    </h2>
                    <h4>{albumData.decs}</h4>

                    <p className="mt-1">
                        <img
                            className="inline-block w-5"
                            src={assets.spotify_logo}
                            alt="spotify logo"
                        />
                        <b>Spotify</b>◦ 1,424,154 likes ◦ <b>50 songs</b>
                        about 2 hr 30 min
                    </p>
                </div>
            </div>

            <div className="mb-4 mt-10 grid grid-cols-3 pl-2 text-[#a7a7a7] sm:grid-cols-4">
                <p>
                    <b className="mr-4">#</b>Title
                </p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img
                    className="m-auto w-4"
                    src={assets.clock_icon}
                    alt="clock icon"
                />
            </div>
            <hr />
            {songsData.map((item, index) => (
                <div onClick={()=>playWithId(item.id)}
                    className="grid-xols-3 fap-2 grid cursor-pointer items-center p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] sm:grid-cols-4"
                    key={index}
                >
                    <p className="text-white">
                        <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                        <img
                            className="mr-5 inline w-10"
                            src={item.image}
                            alt={item.name}
                        />
                        {item.name}
                    </p>
                    <p className="text-[15px]">{albumData.name}</p>
                    <p className="hidden text-[15px] sm:block">5 days ago</p>
                    <p className="text-center text-[15px]">{item.duration}</p>
                </div>
            ))}
        </>
    );
}

export default DisplayAlbum;
