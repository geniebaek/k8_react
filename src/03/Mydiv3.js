import React from 'react'

// export default function Mydiv3(probs) {
  export default function Mydiv3({d1, d2, d3}) {
  return (
    <div className="w-4/6 h-4/6
    flex flex-col justify-center items-center
    bg-lime-500 text-white font-bold
    
    ">
      <div className='w-full h-10 p-5
                      flex justify-start items-center'>
        {/* {`${probs.dn1}>${probs.dn2}>${probs.dn3}`} */}
        {`${d1}>${d2}>${d3}`}
      </div>
    </div>
  )
}
