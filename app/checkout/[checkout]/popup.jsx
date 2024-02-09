"use client"
import React from 'react';
import AddressModel from '@/app/(v1)/user/address/new/model'

export default function Popup({ onClose, closed }) {
    return <section className={`${closed ? 'scale-0' : 'scale-100'} transition-all w-screen h-[90vh] fixed bg-black/50 z-50 flex justify-center md:py-2`}>
        <div className="w-full h-full relative rounded-xl md:w-[50%] lg:w-[35%] bg-white pb-5 overflow-y-auto">
            <h2 className='text-base font-medium text-left py-2 px-3'>Create new address</h2>
            <button onClick={onClose} className='absolute right-2 top-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            <AddressModel isModel={true} onCreate={onClose} />
        </div>
    </section>
}