"use client"
import React from 'react'

const AddressList = ({ country, fullName, mobileNumber, pincode, flatOrBuilding, areaOrStreet, townOrCity, state, onDelete, default: isDefault }) => {
    return (
        <div className='bg-white h-32 rounded-xl border flex relative p-5 my-3 shadow-lg'>
            <div className='my-auto w-9/12'>
                <div className='text-lg cursor-default text-gray-900 font-bold leading-tight'>{fullName}</div>
                <div className='text-xs text-gray-700 font-semibold'>{flatOrBuilding}</div>
                <div className='text-xs text-gray-700 font-semibold'>{areaOrStreet}</div>
                <div className='text-xs text-gray-700 font-semibold'>{`${townOrCity} ${state} ${pincode}`}</div>
                <div className='text-xs text-gray-700 font-semibold'>{country}</div>
                <div className='text-xs text-gray-700 font-semibold'>Phone Number: {mobileNumber} </div>
            </div>
            {isDefault ? <span className='absolute top-0 right-10 text-sm font-medium m-1 px-2 py-1 bg-blue-100 rounded-lg'>Default</span> : null}
            <div className='w-3/12 flex'>
                <img onClick={onDelete} src='/trash.svg' className='w-8 rounded-lg m-1 absolute top-0 right-0 p-2 bg-red-50 fill-gray-700'/>
            </div>
        </div>
    )
}

export default AddressList