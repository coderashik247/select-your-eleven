import React from "react";
import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';

const Player = ({ player }) => {
  console.log(player.name);
  return (
    <div className="card bg-base-100 p-4 border-1 border-stone-200 rounded-xl ">
      <figure>
        <img className="rounded-xl h-[300px] object-cover"
          src={player.player_image}
          alt="Shoes"
        />
      </figure>
      <div className="space-y-2.5 mt-3">
        <div className="flex items-center gap-2">
            <img src={userImg} alt="" />
            <h2 className="card-title font-bold">{player.name}</h2>
        </div>
        <div className="flex items-center justify-between text-[#13131382]">
            <div className="flex items-center gap-2">
                <img src={flagImg} alt="" />
                <p>{player.country}</p>
            </div>
            <p className="py-1 px-4  bg-gray-200 rounded-lg inline">{player.role}</p>
        </div>
        <div>
            <p className="border-1 border-gray-200"></p>
        </div>
        <div className="font-bold">
            <h2>Rating: {player.rating}</h2>
        </div>
        <div className="flex items-center justify-between">
            <h2 className="font-bold"> {player.batting_style} </h2>
            <h2 className="text-[#131313b3] font-light">Left-Hand-Bowl</h2>
        </div>
        <div className="flex items-center justify-between">
            <h2 className="font-bold">Price: {player.price} </h2>
            <button className="py-1 px-4 border-1 border-gray-400 rounded-lg">
                Choose Player
            </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
