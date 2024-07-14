import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

function usePlayerContext() {
    const player = useContext(PlayerContext);
    return player;
}

export {usePlayerContext};
