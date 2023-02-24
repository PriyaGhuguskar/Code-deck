import React,{useState , useContext} from 'react'
import { RxCross1 } from 'react-icons/rx'
import { ModalContext } from '../../Context/Modalcontext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'
import Select from 'react-select';

const NewPlayground = () => {

  const {isOpenModal , closeModal}=useContext(ModalContext)
  const {addPlayground}= useContext(PlaygroundContext)

  const languageOption=[
    {value:'Javascript', label:"Javascript"},
    {value:'python', label:"python"},
    {value:'java', label:"java"},
    {value:'cpp', label:"cpp"},

  ];
  const {folderId}=isOpenModal.identifiers;
  const [cardTitle ,setcardTitle]=useState("");
  const [language ,setlanguage]=useState(languageOption[0]);

  const handleLanguageChange=(selectedOption)=>{
    setlanguage(selectedOption);
  }

  return (
    <>
    <div className='flex flex-row justify-end p-4'>
      <RxCross1 className='cursor-pointer' onClick={()=>closeModal()}/>
    </div>
    <div className='px-6 py-4 mb-8 flex flex-col items-center justify-center gap-6'>
      <h2>Create a New Playground</h2>
      <input type={cardTitle}
      onChange={(e)=>setcardTitle(e.target.value)}
      placeholder='please enter playground title'
      className='border-[.5px] text-sm border-gray-50 rounded-lg shadow-sm p2 w-full' />
      <Select options={languageOption}
      value={language}
      onChange={handleLanguageChange}
      />

      <button className='p-3 w-36 text-black bg-white rounded-lg font-semibold border-[0.5px] border-gray shadow-lg'
     onClick={()=>{
      addPlayground(folderId , cardTitle , language.value);
      closeModal();
     }} > Create Playground
      </button>
    </div>
    </>
  )
}

export default NewPlayground