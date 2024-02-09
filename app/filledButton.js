import React from 'react'

const FilledButton = ({onClick, lable, type, disabled, className, loading}) => {
  return (
    <button disabled={disabled} type={type ? type: 'button'} onClick={onClick} className={className + ' bg-eggplant w-full hover:opacity-95 disabled:opacity-75 hover:shadow transition rounded-full cursor-default py-3 font-bold text-white ' + `${loading && 'animate-pulse'}`}>{lable}</button>
  )
}

export default FilledButton