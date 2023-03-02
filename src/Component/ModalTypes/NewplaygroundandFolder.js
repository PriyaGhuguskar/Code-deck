import React, { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { ModalContext } from "../../Context/Modalcontext";
import { PlaygroundContext } from "../../Context/PlaygroundContext";
import Select from "react-select";
function NewPlayGroundAndFolder() {
  const { closeModal } = useContext(ModalContext);
  const { addPlaygroundAndFolder } = useContext(PlaygroundContext);

  const languageOptions = [
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
    { value: "java", label: "java" },
    { value: "cpp", label: "cpp" },
  ];

  const [playgroundName, setPlaygroundName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };
  return (
    <>
      <div className="flex flex-row justify-end p-4">
        <RxCross1 className="cursor-pointer" onClick={() => closeModal()} />
      </div>
      <div className="px-4 py-3 mb-6 flex flex-col items-center justify-center gap-6">
        <h2>Create a New PlayGround & New Folder</h2>
        <div className="flex w-full">
          <label className="w-1/2">Enter Folder Name</label>
          <input
            type="text"
            value={folderName}
            placeholder="please enter folder title"
            onChange={(e) => setFolderName(e.target.value)}
            className="border-[0.5px] text-sm border-gray-50 rounded-lg p-2 w-1/2"
          />
        </div>
        <div className="flex w-full">
          <label className="w-1/2">Enter Playground Name</label>
          <input
            type="text"
            value={playgroundName}
            placeholder="please enter playground title"
            onChange={(e) => setPlaygroundName(e.target.value)}
            className="border-[0.5px] text-sm border-gray-50 rounded-lg p-2 w-1/2"
          />
        </div>
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button
          className="p-3 w-50 text-black rounder-lg font-semibold border-[0.5px] border-gray-50 shadow-lg"
          onClick={() => {
            addPlaygroundAndFolder(folderName, playgroundName, language.value);
            closeModal();
          }}
          
          
        >
          Create Folder & PlayGround
        </button>
      </div>
    </>
  );
}

export default NewPlayGroundAndFolder;
