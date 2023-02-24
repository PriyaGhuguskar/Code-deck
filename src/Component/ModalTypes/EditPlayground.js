import React, { useState, useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { ModalContext } from '../../Context/Modalcontext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'



const EditPlayground = () => {

  const { closeModal, isOpenModal } = useContext(ModalContext)
  const { editPlaygroundTitle, folders } = useContext(PlaygroundContext)
  const {folderID ,cardID}= isOpenModal.identifiers;
  const [playgroundTitle, setplaygroundTitle] = useState(folders[folderID].playgrounds[cardID].title)


  return (
    <>
      <div className='flex flex-row justify-end p-4'>
        <RxCross1 className='cursor-pointer' onClick={() => closeModal()} />

      </div>
      <div className='px-6 my-4 mb-8 flex flex-col items-center justify-center gap-6'>
        <h2>Edit PlayGround</h2>
        <input type="text" value={playgroundTitle}
          onChange={(e) => setplaygroundTitle(e.target.value)}
          className=" border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p-2 w-full" />
        <button className='p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray shadow-lg'
          onClick={() => {
            editPlaygroundTitle(folderID, cardID , playgroundTitle);
            closeModal()
          }}>
          Proceed
        </button>

      </div>
    </>
  )
}

export default EditPlayground