import React from 'react'
export default function Select({ id, title, expandable=true, setSelected, disabled, action, currentAction, unselected_content, children }) {
    return <div className="w-full flex flex-col">
        <div className={`w-full pb-1 flex flex-row border-b-2 justify-between ${action === currentAction ? 'text-amber-600' : null}`}>
            <h3 onClick={() => { if (!disabled) setSelected(action) }} className='font-semibold md:cursor-pointer cursor-default'>
                <span className='pr-3 pl-1'>{id}</span> {title}</h3>
            {
                action != currentAction ? expandable && <span onClick={() => { if (!disabled) setSelected(action) }} className='text-blue-800 lg:cursor-pointer text-sm'>Change</span>
                    : null
            }
        </div>
        <div className={`w-full xl:p-5 lg:p-5 md:p-5 p-2 transition-all ${action === currentAction ? null : expandable ? 'hidden' : null}`}>
            {children}
        </div>
        {unselected_content ? <div className='p-2'>{unselected_content}</div> : null}
    </div>
}