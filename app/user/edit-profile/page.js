"use client"
import FilledButton from '@/app/(v1)/filledButton'
import OutlineButton from '@/app/outlineButton'
import Navigation from '@/app/navigation'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'
import Image from 'next/image'
import EditProfileSkeleton from '@/components/skeleton/edit-profile'
import { siteConfig } from '@/config/site'

const EditProfile = () => {
    const router = useRouter()

    const { data: session, status } = useSession();

    const [fetchedName, setFetchedName] = React.useState('')
    const [disabled, setDisabled] = React.useState(false)
    const [name, setName] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const fetchUserName = async () => {
        try {
            let response = await axios.get(`/api/user/data?field=name&id=${session?.user?.phoneNumber}`)
            let res = await response.data
            setName(res?.name)
            setFetchedName(res?.name)
        } catch (error) {
            toast.error(`Error: ${error}`)
        }
    }

    React.useEffect(() => {
        if (status === "authenticated") {
            fetchUserName()
        }
    }, [status])

    React.useEffect(() => {
      if(fetchedName===name || name.trim() === ""){
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }, [name])
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            let response = await axios.post('/api/user/data?update=name')
            let res = await response.data
            setName(res.name)
            toast.success('Name updated successfully')
        } catch (error) {
            fetchUserName()
            toast.error(`Error: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }

    if (status === "loading") {
        return <div>
            <Navigation pageName="Edit Profile" menuList={[]} />
            <EditProfileSkeleton/>
        </div>
    } 
    if (!session) {
        redirect('/user')
    } else {
        return (
            <>
                <Navigation menuList={[]} pageName="Edit Profile" />
                <main className='h-screen p-5 flex flex-col'>
                    <Image alt={siteConfig.name + ' - logo'} src={siteConfig.icon.square.src} className='mx-auto mt-5' width={80} height={80}/>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-5 mt-5 w-full'>
                        <input value={name} required onChange={(e) => {
                            setName(e.target.value)
                        }} type='text' placeholder='Name' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
                        <div className='w-full grid-cols-2 gap-x-3 grid'>
                            <OutlineButton lable="Cancel" onClick={router.back} />
                            <FilledButton disabled={disabled} loading={loading} type='submit' lable="Save" />
                        </div>
                    </form>
                </main>
            </>
        )
    }
}
export default EditProfile