"use client"
import axios from 'axios'
import Head from "next/head"
import Link from "next/link"
import Navigation from '@/app/navigation'
import React, { useState, useEffect } from "react"
import { redirect, useRouter } from 'next/navigation'
import CartSkeleton from '@/components/skeleton/cart'
import { Player } from "@lottiefiles/react-lottie-player"
import { useSession } from 'next-auth/react';
import { siteConfig } from '@/config/site'
import OrderItem from './item'

export default function OrdersPage() {
  
  function getDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  }
  const router = useRouter()
    const skeleton = [{ id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }]
    const { data: session, status } = useSession();
    const [data, setData] = useState(null)
    const fetchUser = async () => {
      try {
        let response = await axios.get(`/api/user/orders`)
        let res = await response.data
        setData(JSON.parse(atob(res.data)))
      } catch (error) {
        console.error(error)
      }
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
      {/* My All Orders */}
      <Navigation menuList={[]} pageName={"My Orders"} />
      {!data && skeleton.map((item, i) => <div key={i}><CartSkeleton /></div>)}
      {data && data?.orders && data.orders.length > 0 && (
          data.orders.map((p, idx)=><OrderItem key={idx} {...p}/>)
      )}
      {data && data.orders.length <=0 && (
        <div className="flex h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                No orders yet!
              </h2>
            </div>

            <div className="w-full text-center">
              <Link href="/products">
                <button className="group relative w-[70%] justify-center rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 border border-yellow-500 focus-visible:outline-offset-2 transition focus-visible:outline-yellow-600">
                  Continue Shoping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
}
