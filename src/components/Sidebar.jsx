import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Sidebar() {
    const navigate=useNavigate()

    return (
        <div className="hidden h-full w-[25%] flex-col gap-2 p-2 text-white lg:flex">
            <div className="flex h-[15%] flex-col justify-around rounded bg-[#121212]">
                <div onClick={()=>navigate("/")}
                 className="cursor flex cursor-pointer items-center gap-3 pl-8">
                    <img
                        className="w-6"
                        src={assets.home_icon}
                        alt="home icon"
                    />
                    <p className="font-bold">Home</p>
                </div>

                <div className="cursor flex cursor-pointer items-center gap-3 pl-8">
                    <img
                        className="w-6"
                        src={assets.search_icon}
                        alt="home icon"
                    />
                    <p className="font-bold">Home</p>
                </div>
            </div>

            <div className="h-[85%] rounded bg-[#121212]">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <img
                            className="w-8"
                            src={assets.stack_icon}
                            alt=" stack icon"
                        />
                        <p className="font-semibold">Yoor Library </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img
                            className="w-5"
                            src={assets.arrow_icon}
                            alt="arrow icon"
                        />
                        <img
                            className="w-5"
                            src={assets.plus_icon}
                            alt="plus icon"
                        />
                    </div>
                </div>

                <div className="m-2 flex flex-col items-start justify-start gap-1 rounded bg-[#242424] p-4 font-semibold">
                    <h1>Create your first playlist</h1>
                    <p className="font-light">it's easy we will help you</p>
                    <button className="mt-4 rounded-full bg-white px-4 py-1.5 text-[15px] text-black">
                        Create Playlist
                    </button>
                </div>

                <div className="m-2 mt-4 flex flex-col items-start justify-start gap-1 rounded bg-[#242424] p-4 font-semibold">
                    <h1>Let's findsome podcasts to follow</h1>
                    <p className="font-light">
                        we'll keep you update on new episodes{' '}
                    </p>
                    <button className="mt-4 rounded-full bg-white px-4 py-1.5 text-[15px] text-black">
                        Browse podcasts
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
