"use client"
import React, { useEffect, useState } from 'react'
import Navigation from '@/app/navigation'
import Item from './item'
import FilledButton from '@/app/(v1)/filledButton'
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { Player } from '@lottiefiles/react-lottie-player';
import CartSkeleton from '@/components/skeleton/cart'
import axios from 'axios'

const Orders = () => {
    const router = useRouter()
    const skeleton = [{ id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }]
    const { data: session, status } = useSession();
    const [data, setData] = useState(null)
    const fetchUser = async () => {
        let response = await axios.get(`/api/user/orders`)
        let res = await response.data
        setData(JSON.parse(atob(res.data)))
    }
    useEffect(() => {
        if (status === "authenticated") {
            fetchUser()
        }
    }, [status])
    if (status === "loading") {
        return <div>
            <Navigation pageName="My  Orders" menuList={[]} />
            {skeleton.map((i, index) => <div key={index}><CartSkeleton /></div>)}
        </div>
    }
    if (!session) {
        redirect('/user')
        return
    } else {
        return (
            <>
                <Navigation menuList={[]} pageName={"My Orders"} />
                {!data && skeleton.map((item, i) => <div key={i}><CartSkeleton /></div>)}
                {data && data?.orders?.map((item) => <Item data={item} />)}
                {data && data.orders.length <= 0 && <div className='w-full h-full flex flex-col'>
                    <div className='py-auto'>
                        <Player
                            autoplay
                            loop
                            src="/lottie/no-orders.json"
                            className=''
                            style={{ height: '300px', width: '300px' }}
                        >
                            <div className='text-lg mt-3 mb-auto text-gray-700 text-center font-medium'>No orders yet</div>
                        </Player>
                    </div>
                </div>}
            </>
        )
    }
}

export default Orders