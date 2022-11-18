import React from 'react'

const Partner = () => {
  return (
    <div className='flex items-center'>
      <div className='flex justify-center items-center  w-full h-[300px] relative bg-blue-800'>
        <h4 className='text-white text-4xl font-semibold text-center'>Search for a partner</h4>
        <div className='flex py-1 px-1 absolute bottom-1 rounded w-[600px] h-10 bg-white'>
          <button className='flex items-center justify-center h-10 w-24 rounded-md bg-btnblue'>Search</button>
        </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Partner