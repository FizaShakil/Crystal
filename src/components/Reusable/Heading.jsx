import React from 'react'

const Heading = ({head}) => {
  return (
    <div>
        <div className='text-center text-3xl md:text-5xl font-bold mt-3'>
            {head}
        </div>
    </div>
  )
}
export const SubLine = ({line})=>{
  return(
    <div>
      <div className='text-center text-sm md:text-lg mt-4'>{line}</div>
    </div>
  )
}

export default Heading