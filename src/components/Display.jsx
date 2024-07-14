import { Route, Routes, useLocation } from 'react-router-dom';

import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { useEffect, useRef } from 'react';
import { albumsData } from '../assets/assets';

function Display() {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = isAlbum ? location.pathname.slice(-1) : '';
    const bgColor = albumsData.find(
        (album) => album.id === Number(albumId)
    ).bgColor;


    useEffect( ()=>{
        if(isAlbum){
            displayRef.current.style.background=`linear-gradient(${bgColor},#121212)`
        }else{
            displayRef.current.style.background=`#121212`
        }
    })

    return (
        <div
            ref={displayRef}
            className="m-2 w-full overflow-auto rounded bg-[#121212] px-6 pt-4 text-white lg:ml-0 lg:w-[65%]"
        >
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />
            </Routes>
        </div>
    );
}

export default Display;
