import React, { use } from 'react';

const AvailablePlayers = ({promisePlayers}) => {
    const players = use(promisePlayers);
    console.log(players);
    return (
        <>
            {
                players.map(player => player.name)
            }
        </>
    );
};

export default AvailablePlayers;