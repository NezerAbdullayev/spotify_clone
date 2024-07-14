import { useNavigate } from 'react-router-dom';

function AlbumItem({ image, name, decs, id }) {
    const navigate = useNavigate();

    return (
        <div
            className="min-w-[180px] cursor-pointer rounded p-2 px-3 hover:bg-[#ffffff26]"
            onClick={() => navigate(`/album/${id}`)}
        >
            <img className="rounded" src={image} alt={name} />
            <p className="mb-1 mt-2 font-bold">{name}</p>
            <p className="text-slate-200">{decs}</p>
        </div>
    );
}

export default AlbumItem;
