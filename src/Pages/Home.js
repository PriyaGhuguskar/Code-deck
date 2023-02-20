import React from 'react'
import LeftPanel from '../Component/Home/LeftPanel'
import RightPanel from '../Component/Home/RightPanel'

const Home = () => {
  return (
   <div className='grid grid-cols-1 lg:grid-cols-2'>
<div className="sm:w-full md:w-full">
<LeftPanel />
</div>
<div className="sm:w-full md:w-full ">
<RightPanel />
</div>

   </div>

  )
}

export default Home