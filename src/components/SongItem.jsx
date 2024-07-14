import { usePlayerContext } from "../hooks/use-PlayerContext";

function SongItem({ name, image, decs, id }) {

    const {playWithId}=usePlayerContext()

    return (
        <div onClick={()=>playWithId(id)} className="min-w-[180px] cursor-pointer rounded p-2 px-3 hover:bg-[#ffffff26]">
            <img className="rounded" src={image} alt={name} />
            <p className="mb-1 mt-2 font-bold">{name}</p>
            <p className="text-sm text-slate-200">{decs}</p>
        </div>
    );
}

export default SongItem;
