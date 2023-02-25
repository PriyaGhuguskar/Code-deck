import React, { useContext } from "react";
import { ModalContext } from "../../Context/Modalcontext";

const LeftPanel = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="border-2 border-black h-screen bg-black flex justify-end">
        <div className=" mx-auto flex flex-col items-center justify-center gap-3">
            <img src='./logo.png' alt='logo' />
            <h1 className='font-semibold text-white'>Code Deck</h1>
            <h3 className='font-semibold text-white'>Code. Compile. Debug</h3>
            <button
          className="w-full p-4 bg-white shadow-lg rounded-lg drop-shadow-2xl"
          onClick={() =>
            openModal({
              show: true,
              modalType: 3,
              identifiers: {
                folderId: "",
                cardID: "",
              },
            })
          }
        >
          + Create New PlayGround
        </button>
        </div>
    </div>

  )
}

export default LeftPanel