import React from "react";
import delImg from "../../assets/delete.png";
import { toast } from "react-toastify";

const SelectPlayer = ({
  purchasePlayer,
  purchasePlayers,
  setPurchasePlayers,
  availableBalance,
  setAvailableBalance
}) => {
  const handleDelete = (purchasePlayer) => {
    const matchingPlayer = purchasePlayers.filter(
      (p) => p.name !== purchasePlayer.name
    );
    setPurchasePlayers(matchingPlayer);

    setAvailableBalance(availableBalance + parseInt(purchasePlayer.price.replace("USD", "").replace(/,/g, "").trim()))
    // purchasePlayer.price.replace("USD", "").replace(/,/g, "").trim()
    toast.error(`${purchasePlayer.name} removed!`);
  };
  return (
    <div className="flex justify-between items-center border-1 border-stone-200 rounded-xl p-3">
      <div className="flex justify-center items-center gap-4">
        <img
          className="h-[100px] rounded-xl"
          src={purchasePlayer.player_image}
          alt=""
        />
        <div className="">
          <h2 className="font-bold text-xl"> {purchasePlayer.name} </h2>
          <p className="text-[#131313b3]"> {purchasePlayer.batting_style} </p>
        </div>
      </div>
      <button onClick={() => handleDelete(purchasePlayer)}>
        <img src={delImg} alt="" />
      </button>
    </div>
  );
};

export default SelectPlayer;
