import React from 'react'
import LeftPanel from '../Component/Home/LeftPanel'
import RightPanel from '../Component/Home/RightPanel'

const Home = () => {
  return (
   <div className='flex grid-cols-1 lg:grid-cols-2'>
<div className="sm:w-full md:w-full lg:w-2/5 ">
<LeftPanel />
</div>
<div className=" sm:w-full md:w-full lg:w-3/5">
<RightPanel />
</div>

   </div>
   

  )
}

export default Home