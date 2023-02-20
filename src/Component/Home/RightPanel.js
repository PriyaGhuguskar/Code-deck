import React from 'react'
import { FcOpenedFolder } from "react-icons/fc"
import { BiEditAlt } from "react-icons/bi"
import { IoTrashOutline } from "react-icons/io5"


const RightPanel = () => {
    return (
        <div className='border-2 border-black h-screen p-8'>
            <div className='flex justify-between items-center'>
                <h2>
                    My <span className="font-semibold text-2xl">Playground</span>
                </h2>
                <h4>
                    <span className=' font-semibold text-2xl'></span>
                </h4>

            </div>
            <hr className='mb-12 mt-4 bg-black' />
            <div className='flex flex-col my-8'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <FcOpenedFolder size={"2em"} />
                        <h3 className='font-semibold'>DSA</h3>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <BiEditAlt size={"1.5em"} />
                        <IoTrashOutline size={"1.5em"} />
                        <h4 className='font-semibold'>
                            <span className='font-semobold text-2xl'>+</span>
                             New Playground
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPanel