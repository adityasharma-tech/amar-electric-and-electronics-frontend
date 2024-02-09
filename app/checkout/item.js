"use client"
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

const Item = ({ name, slug, quantity: qty, collection, pricing, thumbnail, variations, refreshData, setProcessing }) => {
    const [quantity, setQuantity] = React.useState(qty)
    return (
        <div className='w-full border-b flex p-3 h-32 gap-x-3'>
            <div className='bg-red-10 w-[40%] h-full relative'>
            {variations.color ? <span style={{
                    backgroundColor: variations?.color,
                    boxShadow: `0px 0px 3px ${variations?.color}`
                }} className='w-4 h-4 absolute bottom-1 right-1 z-0'/> : null}
                {variations.size ? <span className='px-2 py-1 text-xs rounded font-medium absolute top-1 right-1 z-20 bg-zinc-50'>{variations.size}</span> : null}
                {variations.material ? <span className={`px-2 py-1 text-xs rounded font-medium absolute ${ variations.size ? 'top-8' : 'top-1'} right-1 z-20 bg-zinc-50`}>{variations.material}</span> : null}
                <img alt={thumbnail.alt} src={thumbnail.url} className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className='bg-blue-10 w-[60%] h-full'>
                <div className='w-full h-1/2 bg-red-10'>
                    <div><Link href={`/product/${slug}` ? `/product/${slug}` : "/error/product/404"} className='text-lg cursor-default text-gray-700 font-bold leading-tight hover:underline hover:text-blue-600'>{name.slice(0, 40)}{name.length > 44 && "..."}</Link></div>
                    <div className='text-xs text-gray-700 font-semibold'>Quantity: {quantity}</div>
                </div>
                <div className='w-full h-1/2 bg-blue-10 flex justify-between'>
                    <div className='font-bold ml-auto text-base mt-auto text-gray-700'>₹{pricing.offerPrice}</div>
                </div>
            </div>
        </div>
    )
}

export default Item
