import React from 'react';
import loadinGif from './gif.gif'

function Loading() {
 

  return (
    <div className="px-4 py-4 h-24 flex items-center">
    <span> Loading..... </span>
    <span><img class="h-24" src={loadinGif} alt=""/> </span>
    {/* <iframe src="https://embed.lottiefiles.com/animation/100199" className="px-4 py-4 w-40"></iframe> */}
    </div>
  )
}

export default Loading