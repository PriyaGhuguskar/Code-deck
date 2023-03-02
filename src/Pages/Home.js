import React, { useContext } from "react";
import LeftPanel from '../Component/Home/LeftPanel'
import RightPanel from '../Component/Home/RightPanel'
import { ModalContext } from "../Context/Modalcontext";
import Modal from "../Component/Modal";
function Home() {
  const { isOpenModal } = useContext(ModalContext);
  return (
    <div className="flex grid-cols-1 lg:grid-cols-2">
      <div className="sm:w-full md:w-full lg:w-5/12">
        <LeftPanel />
      </div>
      <div className="sm:w-full md:w-full lg:w-7/12">
        <RightPanel />
      </div>
      {isOpenModal.show && <Modal />}
    </div>
  );
}


export default Home;
