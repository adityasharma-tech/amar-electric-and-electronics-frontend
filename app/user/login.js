"use client"
import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import FilledButton from '../filledButton'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import Navigation from "@/app/navigation"
import { toast } from 'react-toastify';

const Login = () => {
  const router = useRouter()
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [loading, setLoading] = useState(false)
  // Login Hooks
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [agreed, setAgreed] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setLoading(true)
    const result = await signIn("credentials", {
      phoneNumber: phoneNumber.startsWith("+") ? phoneNumber.slice(3) : phoneNumber,
      password,
      redirect: false,
    });
    await setLoading(false)
    if (result.error) {
      toast.error('Invalid number/password')
    } else {
      toast.success("Login Successfull")
    }
  }
    return (
      <div className='bg-blue-00'>
        <Navigation menuList={[]} pageName="Login" />
        <div className='p-5 w-full bg-red-00 h-full mt-5'>
          <form onSubmit={handleSubmit} className='my-auto flex-col flex bg-blue-10 w-full gap-y-4'>
            <div className='flex justify-center'><img className='h-16 w-16' src="/logo-light.jpg" /></div>
            <input value={phoneNumber} required onChange={(e) => {

              setPhoneNumber(e.target.value)
            }} type='tel' placeholder='Mobile Number' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
            <input value={password} required onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
            <Switch.Group as="div" className="flex cursor-default gap-x-4 sm:col-span-2 mb-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-[#f8cd31]' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-default rounded-full p-px ring-2 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  <span className="sr-only">Remember me</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm font-medium leading-6 text-gray-600">
                Remember me{' '}
                {/* <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a> */}

              </Switch.Label>
            </Switch.Group>
            <FilledButton loading={loading} type={'submit'} lable="Login" />
            <p className="mt-10 text-center text-sm text-gray-500">
              No Account Created? {' '}
              <button type="button" onClick={() =>router.push("/auth/sign_up")} className="font-semibold leading-6 text-[#dfba36] hover:opacity-90">
                Create Alishan Account
              </button>
            </p>
          </form>
        </div>
        {/* <BottomBar /> */}
      </div>
    )
}

export default Login