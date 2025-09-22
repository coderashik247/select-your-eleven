import React, { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({
  promisePlayers,
  availableBalance,
  setAvailableBalance,
  purchasePlayers,
  setPurchasePlayers,
}) => {
  const players = use(promisePlayers);
  console.log(players);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto gap-5 font-sora mt-6">
        {players.map((player) => (
          <Player
            player={player}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></Player>
        ))}
      </div>
    </>
  );
};

export default AvailablePlayers;
