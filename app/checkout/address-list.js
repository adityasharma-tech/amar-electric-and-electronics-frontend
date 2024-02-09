"use client"
import React from 'react'
import { RadioGroupItem } from "@/components/ui/radio-group"

const AddressList = ({ _id, country, fullName, phoneNumber, pincode, flatOrBuilding, areaOrStreet, townOrCity, state, onDelete, onClick }) => {
    return (
        <div onClick={onClick} className='bg-white h-32 rounded-xl border flex gap-x-2 relative p-3 my-3 shadow-lg'>
            <RadioGroupItem value={_id} id={_id} />
            <div className='my-auto w-9/12'>
                <div className='text-lg cursor-default text-gray-900 font-bold leading-tight'>{fullName}</div>
                <div className='text-xs text-gray-700 font-semibold'>{flatOrBuilding}</div>
                <div className='text-xs text-gray-700 font-semibold'>{areaOrStreet}</div>
                <div className='text-xs text-gray-700 font-semibold'>{`${townOrCity} ${state} ${pincode}`}</div>
                <div className='text-xs text-gray-700 font-semibold'>{country}</div>
                <div className='text-xs text-gray-700 font-semibold'>Phone Number: {phoneNumber} </div>
            </div>
            <div className='w-3/12 flex'>
                <img onClick={onDelete} src='/trash.svg' className='w-8 rounded-lg m-1 absolute top-0 right-0 p-2 bg-red-50 fill-gray-700' />
            </div>
        </div>
    )
}

export default AddressList