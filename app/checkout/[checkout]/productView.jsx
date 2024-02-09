"use client"
import React from 'react'
import Image from 'next/image'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function CheckoutProductView(params) {
    return <article className='w-full flex flex-row gap-x-2'>
        <Image src={params.thumbnail.secure_url} objectFit='cover' alt={params.thumbnail.asset_id} width={150} height={150} />
        <div className='flex flex-col gap-y-2 py-2'>
            <span className='font-semibold text-sm'>{params.title}</span>
            <span className='text-sm font-medium text-red-600'><del className='text-gray-700'>₹{params.pricing.price.toLocaleString()}</del> ₹{params.pricing.offerPrice.toLocaleString()}</span>
            {params.single ? <Select value={params.quantity} onValueChange={value => params.setQuantity(value)}>
                <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Qty" />
                </SelectTrigger>
                <SelectContent className="overflow-y-auto max-h-[50vh]">
                    {Array.from({ length: params.availableQty }, (item, index) => (
                        <SelectItem key={index} value={index+1}>{index+1}</SelectItem>
                        ))}
                </SelectContent>
            </Select> : <div className='flex'>
                <span className='text-xl text-red-600 font-bold'>Qty: {params.quantity}</span>
                </div>}
        </div>
    </article>
}