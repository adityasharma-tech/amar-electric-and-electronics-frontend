import React from 'react'

const AddressTypeSelector = ({types, selectedid, onSelect}) => {
  return (
    <div className='grid grid-cols-4 gap-x-2'>
        {types.map((i, index)=><div key={index}><button type="button" onClick={()=>{onSelect(i.id)}} className={`text-center text-sm rounded-lg ${selectedid===i.id ? "text-gray-700 bg-gray-200 font-medium" :"text-gray-500 bg-gray-100 border"} shadow w-full py-1`}>{i.optionName}</button></div>)}
    </div>
  )
}

export default AddressTypeSelector