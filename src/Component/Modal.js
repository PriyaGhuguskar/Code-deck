import { useContext } from "react";
import {ModalContext} from '../Context/Modalcontext'
import { 
    EditFolder,
    EditPlayground,Loading,NewFolder,
    NewPlayground,NewplaygroundandFolder } 
    from "./ModalTypes";

    function Modal(){
        const {isOpenModal}= useContext(ModalContext)
        const {ModalType}=isOpenModal;

        return(
            <div className=" flex justify-center items-center overflow-hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className=" relative w-auto my-6 mx-auto max-w-3xl"
                onClick={(e)=>{
                    e.stopPropogation()
                }}>
<div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-[30rem] bg-white outline-none focus:outline-none">
    {ModalType===1 && <NewFolder />}
    {ModalType===2 && <NewPlayground />}
    {ModalType===3 && <NewplaygroundandFolder />}
    {ModalType===4 && <EditFolder />}
    {ModalType===5 && <EditPlayground />}
    {ModalType===6 && <Loading />}

</div>
                </div>

            </div>
        )
    }