import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

function DisplayHome() {
    return (
        <>
            <Navbar />

            <div className="mb-4">
                <h1 className="my-5 text-2xl font-bold">Featured Charts</h1>

                <div className="flex overflow-auto">
                    {albumsData.map((album, index) => (
                        <AlbumItem
                            key={index}
                            name={album.name}
                            decs={album.desc}
                            id={album.id}
                            image={album.image}
                        />
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h1 className="my-5 text-2xl font-bold">Today's biggest  hits</h1>

                <div className="flex overflow-auto">
                    {songsData.map( (item,index)=>(
                        <SongItem 
                        key={index}
                        id={item.id}
                        name={item.name}
                        decs={item.decs}
                        image={item.image}
                        />
                    ))}
                </div>
            </div>

        </>
    );
}

export default DisplayHome;
