import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-[30vh] flex justify-center items-center'>
      <div className='w-12 h-12 animate-spin border-b-4 border-r-4 rounded-full  border-[#6b6b6b]'/>
    </div>
  )
}

export default Loader