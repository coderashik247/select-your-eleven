import { Suspense, useState } from "react";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(5000000);
  const [purchasePlayers, setPurchasePlayers] = useState([]);

  console.log(purchasePlayers);
  const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
  };

  const promisePlayers = fetchPlayers();

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between mt-5 font-sora">
        <h2 className="text-2xl font-bold ">
          {" "}
          {toggle === true
            ? "Available Players"
            : `Selected Players( ${purchasePlayers.length}/6)`}{" "}
        </h2>
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
            Selected <span>({purchasePlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers
            promisePlayers={promisePlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasePlayers={purchasePlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasePlayers={purchasePlayers}
          setPurchasePlayers={setPurchasePlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        ></SelectedPlayers>
      )}

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
