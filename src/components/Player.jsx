import { assets } from '../assets/assets';
import { usePlayerContext } from '../hooks/use-PlayerContext';

function Player() {
    const { seekBar, seekBg, playStatus, play, pause,track,time,next,previous,seekSong} = usePlayerContext();

    return (
        <div className="flex h-[10%] items-center justify-between bg-black px-4 text-white">
            <div className="hidden items-center gap-4 lg:flex">
                <img
                    className="w-12"
                    src={track.image}
                    alt={track.name}
                />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className="m-auto flex flex-col items-center gap-1">
                <div className="flex gap-4">
                    <img
                        className="w-4 cursor-pointer"
                        src={assets.shuffle_icon}
                        alt="shuffle icon"
                    />
                    <img
                        className="w-4 cursor-pointer"
                        src={assets.prev_icon}
                        alt="prev icon"
                        onClick={previous}
                    />
                    {playStatus ? (
                        <img
                            onClick={pause}
                            className="w-4 cursor-pointer"
                            src={assets.pause_icon}
                            alt="pause icon"
                        />
                    ) : ( 
                        <img
                            onClick={play}
                            className="w-4 cursor-pointer"
                            src={assets.play_icon}
                            alt="play icon"
                        />
                    )}
                    <img
                        className="w-4 cursor-pointer"
                        src={assets.next_icon}
                        alt="next icon"
                        onClick={next}
                    />
                    <img
                        className="w-4 cursor-pointer"
                        src={assets.loop_icon}
                        alt="loop icon"
                    />
                </div>

                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div
                        ref={seekBg} onClick={seekSong}
                        className="w-[60vw] max-w-[500px] cursor-pointer rounded-full bg-gray-300"
                    >
                        <hr
                            ref={seekBar}
                            className="h-1 w-0 rounded-full border-none bg-green-700"
                        />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            <div className="hidden items-center gap-2 opacity-75 lg:flex">
                <img className="w-4" src={assets.plays_icon} alt="plays icon" />
                <img className="w-4" src={assets.mic_icon} alt="mic  icon" />
                <img className="w-4" src={assets.queue_icon} alt="queue icon" />
                <img
                    className="w-4"
                    src={assets.speaker_icon}
                    alt="speaker icon"
                />
                <img
                    className="w-4"
                    src={assets.volume_icon}
                    alt="volume icon"
                />
                <div className="h-1 w-20 rounded bg-slate-50"></div>
                <img
                    className="w-4"
                    src={assets.mini_player_icon}
                    alt="mini player icon"
                />
                <img className="w-4" src={assets.zoom_icon} alt="zoom icon" />
            </div>
        </div>
    );
}

export default Player;
