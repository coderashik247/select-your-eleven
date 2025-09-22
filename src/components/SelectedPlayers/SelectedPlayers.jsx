import React from "react";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const SelectedPlayers = ({
  purchasePlayers,
  setPurchasePlayers,
  availableBalance,
  setAvailableBalance,
}) => {
  console.log(purchasePlayers);
  return (
    <div className="max-w-[1200px] mx-auto font-sora mt-5 space-y-2.5">
      {purchasePlayers.map((purchasePlayer) => (
        <SelectPlayer
          purchasePlayer={purchasePlayer}
          purchasePlayers={purchasePlayers}
          setPurchasePlayers={setPurchasePlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        ></SelectPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
