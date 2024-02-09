import React from 'react'

const OutlineButton = ({onClick, lable}) => {
  return (
    <button onClick={onClick} className='border-eggplant bg-white hover:shadow hover:opacity-95 border cursor-default w-full rounded-full py-3 font-bold text-gray-700'>{lable}</button>
  )
}

export default OutlineButton