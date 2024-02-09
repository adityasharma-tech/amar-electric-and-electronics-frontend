import { cn } from '@/lib/utils'
import React from 'react'
export default function CardContent({ children, title, className }) {
    return <div className={cn('w-full px-4 py-4 rounded-t-xl border flex flex-col', className)}>
        <div className={`w-full pb-1 flex flex-row justify-start border-b-2 border-gray-300 ${title ? null : 'hidden'}`}><h3 className='font-semibold'>{title}</h3></div>
        {children}
    </div>
}
export function CardFooter({ btn_title, disabled, onSubmit }) {
    return <div className="w-full px-4 py-4 bg-zinc-100 rounded-b-xl border">
        <button
            onClick={()=>onSubmit()}
            disabled={disabled}
            type="button"
            style={{ boxShadow: `0px 0px 4px rgb(253 224 71 /1)` }}
            className='flex px-2.5 text-sm font-medium rounded-xl disabled:opacity-60 py-1.5 bg-yellow-400 ring-1 ring-yellow-300'>{btn_title}</button>
    </div>
}