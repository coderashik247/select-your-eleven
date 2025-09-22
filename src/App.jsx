import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

function App() {
  const [toggle, setToggle] = useState(true);
  const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
  };

  const promisePlayers = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between mt-5 font-sora">
        <h2 className="text-2xl font-bold ">Available Players</h2>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-5 border-1 border-r-0 rounded-l-xl ${
              toggle === true ? "font-bold bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-5 border-1 border-l-0 rounded-r-xl ${
              toggle === false ? "font-bold bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={<div className="flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>}
        >
          <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
