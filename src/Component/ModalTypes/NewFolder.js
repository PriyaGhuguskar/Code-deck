import React, { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { ModalContext } from "../../Context/Modalcontext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";

function NewFolder() {
  const { closeModal } = useContext(ModalContext);
  const { addFolder } = useContext(PlaygroundContext);
  const [folderTitle, setFolderTitle] = useState("");
  return (
    <>
      <div className="cursor-pointer flex flex-row justify-end p-4">
        <RxCross1  onClick={() => closeModal()} />
      </div>
      <div className="cursor-pointer px-4 py-4 mb-8 flex flex-col items-center justify-center gap-6">
        <h2 className="cursor-pointer">Create a New Folder</h2>
        <input
          type="text"
          onChange={(e) => setFolderTitle(e.target.value)}
          value={folderTitle}
          placeholder="Please enter folder title"
          className=" border-[.5px] text-sm border-gray rounded-lg shadow-sm p-2 w-full"
        />
        <button
          className="p-3 w-50 text-black bg-white rounded-lg font-semibold border-[.5px] border-gray shadow-lg"
          onClick={() => {
            addFolder(folderTitle);
            closeModal();
          }}
        >
          Create Folder
        </button>
      </div>
    </>
  );
}

export default NewFolder;
