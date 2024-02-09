"use client"
import React, { useRef } from 'react'
import Icon from '@/components/icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories, setDesktopMode } from '@/lib/slices/appSlice'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserDropDown } from '@/components/home/userDropDown'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getPublicData } from '@/lib/utils'
import CartMenu from '@/components/home/cartMenu'
import { siteConfig } from '@/config/site'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = ({ pageName }) => {
  const router = useRouter()
  const params = useSearchParams()
  const { data: session, status } = useSession();
  const searchRef = useRef()
  const dispatch = useDispatch()
  const { desktop_mode, categories } = useSelector((state) => state.app);
  const [query, setQuery] = React.useState('')
  React.useEffect(() => {
    function isMobile() {
      const userAgent = navigator.userAgent;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }
    if (isMobile()) {
      dispatch(setDesktopMode(false))
    } else {
      dispatch(setDesktopMode(true))
    }
  }, [])
  async function fetchCategories(){
    const my_categories = await getPublicData("category")
    dispatch(setCategories(my_categories))
  }
  React.useEffect(()=>{
    fetchCategories()
  }, [])
  function replaceQueryParam(url, paramName, newValue) {
    const searchParams = new URLSearchParams(url);

    // Create a new URLSearchParams object with the updated values
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set(paramName, newValue);

    // Convert the updated URLSearchParams back to a string
    return '?' + updatedParams.toString();
  }

  async function handleSubmit(e) {
    e.preventDefault()
    router.push(`/products${replaceQueryParam(params.toString(), "q", query)}`)
  }
  if (desktop_mode) {
    return <nav className={`w-full gap-x-3 bg-slate-800 sticky top-0 z-[5000] border-b border-gray-500 flex flex-row py-1 px-3`}>
      <div className='mr-auto my-auto'><Link className='flex flex-row gap-x-3' href="/"><Image alt={`${siteConfig.name} - Icon`} src={siteConfig.icon.square.src} className="rounded-full" height={40} width={40} /><span className='font-bold text-lg my-auto md:block hidden text-white'>{siteConfig.name}</span></Link></div>
      <form onSubmit={handleSubmit} className='flex w-[50%] rounded-xl h-10 my-auto'>
        <Select defaultValue={categories[0]?._id}>
          <SelectTrigger className="w-[100px] h-full focus:ring-0 bg-white border-none border-r rounded-lg rounded-r-none">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="z-[500000]">
            {categories.map((i, index) => <SelectItem key={index} value={i._id}>{i.title}</SelectItem>)}
          </SelectContent>
        </Select>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} required ref={searchRef} type="search" className="bg-white rounded-none h-full focus-visible:ring-0" placeholder="Search Alishan Products" />
        <Button type="submit" className="bg-yellow-400 shadow-none h-full rounded-none rounded-r-xl" variant="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </Button>
      </form>
      <div className="flex flex-row h-full gap-x-3">{!session ? <Link className='h-full' href="/auth/sign_in"><Button className="bg-white rounded-xl h-10 px-5 text-black hover:bg-zinc-100 hover:text-gray-700">Login</Button></Link> 
      :<React.Fragment>
        <CartMenu/> 
        <UserDropDown onLogOut={() => {
        try {
          signOut()
        } catch (error) {
          console.error(error)
        }
      }} /> </React.Fragment>}</div>
    </nav>
  } else {
    return (
      <div className='w-full flex px-5 py-4 border-b bg-white'>
        <Icon onClick={() => router.back()} className={'p-3 mr-auto'} icon={'/svg/angle-left.svg'} />
        <span className='text-lg font-semibold text-gray-800 my-auto'>{pageName}</span>
        <div className='ml-auto'></div>
      </div>
    )
  }
}

export default Navigation