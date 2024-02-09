"use client"
import React, { useEffect, useState } from 'react'
import Navigation from '../../navigation'
import FavoritiesSkeleton from '@/components/skeleton/favorities'
import Item from './item'
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import { Player } from '@lottiefiles/react-lottie-player';

const Favorities = () => {
  const products = [{ id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }, { id: 12 }]
  const { data: session, status } = useSession();
  const [data, setData] = useState(null)
  const fetchUser = async () => {
    let response = await fetch(`/api/user/data?field=favorities&populate=favorities,favorities.thumbnail`, {
      method: "GET",
    })
    let res = await response.json()
    setData(res.data)
  }
  useEffect(() => {
    if (status === "authenticated") {
      fetchUser()
    }
  }, [status])
  if (status === "loading") {
    return <div>
      <Navigation pageName="My Favorities" menuList={[]} />
      {products.map((item, index) => <div key={index}><FavoritiesSkeleton /></div>)}
    </div>
  }
  if (!session) {
    redirect('/user')
  } else {
    return (
      <div>
        <Navigation pageName="My Favorities" menuList={[]} />
        {!data && products.map((item, index) => <div key={index}><FavoritiesSkeleton /></div>)}
        <div className='grid lg:grid-cols-2 grid-cols-1'>{data && data.favorities.map((item, index) => <Item
          key={index}
          slug={item.slug}
          title={item.title}
          category={item.category}
          pricing={item.pricing}
          thumbnail={item.thumbnail}
          productId={item._id.toString()}
          variations={item.variations} />)}</div>
        {data && data.favorities.length <= 0 && <div className='w-full h-full'><Player
          autoplay
          loop
          src="/lottie/favorities.json"
          style={{ height: '300px', width: '300px' }}
        >
        </Player>
          <div className='text-lg text-gray-700 text-center font-medium'>Everything you Like and Save, in one place.</div>
          <div className='text-sm text-gray-400 text-center'>All your Liked and Saved Items will show up here</div>
        </div>}

      </div>
    )
  }
}

export default Favorities