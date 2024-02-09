"use client"
import React from 'react'

const Address = ({ _id, fullName, phoneNumber, pincode, flatOrBuilding, areaOrStreet, townOrCity, state, onClick, selected }) => {
    return (
        <div onClick={onClick} className='bg-amber-50 rounded-xl border border-amber-400 flex flex-row gap-x-2 relative p-3'>
            {!selected ? (
                <div className="absolute left-3 top-3 flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-gray-400 rounded-full">
                    <div className="transition-all duration-300 rounded-full w-[0px] h-[0px]"></div>
                </div>
            ) : (
                <div className="absolute left-3 top-3 flex justify-center items-center transition-all duration-300 w-[18px] h-[18px] border-2 p-0.5 border-indigo-500 rounded-full">
                    <div className="transition-all duration-300 rounded-full w-[100%] h-[100%] bg-indigo-500"></div>
                </div>
            )}
            <div className='ml-7'><span className='text-base mt-auto cursor-default text-gray-900 font-semibold leading-tight'>{fullName} </span><span className='text-sm text-gray-700 font-medium mt-auto'>{flatOrBuilding} {areaOrStreet} {`${townOrCity} ${state} ${pincode}`} {phoneNumber}</span></div>
        </div>
    )
}

export default Address