import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar() {
    const navigate=useNavigate()

    return (
        <>
            <div className="flex w-full items-center justify-between font-semibold">
                <div className="flex items-center gap-2">
                    <img 
                        className="w-8 cursor-pointer rounded-2xl bg-black p-2"
                        src={assets.arrow_left}
                        alt="arrow left"
                        onClick={()=>navigate(-1)}
                    />
                    <img
                        className="w-8 cursor-pointer rounded-2xl bg-black p-2"
                        src={assets.arrow_right}
                        alt="arrow right"
                        onClick={()=>navigate(1)}
                    />
                </div>

                <div className="flex items-center gap-4">
                    <p className="hidden cursor-pointer rounded-2xl bg-white px-4 py-1 text-[15px] text-black lg:block">
                        Explore Premium
                    </p>
                    <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center '>G</p>
                </div>
            </div>

            <div className='flex items-center gap-2 mt-4 '>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer c'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl  cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl  cursor-pointer'>Podcasts</p>
            </div>
        </>
    );
}

export default Navbar;
