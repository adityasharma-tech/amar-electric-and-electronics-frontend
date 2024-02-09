"use client"
import React, { useState, useEffect } from 'react'
import Navigation from '../../navigation'
import { Switch } from '@headlessui/react'
import FilledButton from '../filledButton'
import { toast } from 'react-toastify';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import OtpInput from "./otpInput"
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter()
  if (session) {
    router.push("/auth/sign_in")
    return;
  }
  const firebaseConfig = {
    apiKey: "AIzaSyCHkwPaKTxeDfLGLNnBdXdcQD5yAYwiD-A",
    authDomain: "nsconsoleadmin.firebaseapp.com",
    projectId: "nsconsoleadmin",
    storageBucket: "nsconsoleadmin.appspot.com",
    messagingSenderId: "113387530864",
    appId: "1:113387530864:web:c6c8ba07b280a14cc1a2b5"
  };
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState({ minutes: 4, seconds: 59 });
  const [isOpen, setIsOpen] = useState(false);
  const [Otp, setOtp] = useState("");

  const app = initializeApp(firebaseConfig)
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [agreed, setAgreed] = useState(true)
  // Register Hooks
  const [fullName, setFullName] = useState('')
  const [rePhoneNumber, setRePhoneNumber] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [reMatchPassword, setReMatchPassword] = useState('')
  const [reAgreed, setReAgreed] = useState(true)
  const [isOtpSend, setIsOtpSend] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        if (time.minutes === 0 && time.seconds === 0) {
          clearInterval(interval);
          setIsOpen(false);
        } else {
          if (time.seconds === 0) {
            setTime({ minutes: time.minutes - 1, seconds: 59 });
          } else {
            setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
          }
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isOpen, time]);


  const handleStartTimer = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify(time));
  }, [time]);
  useEffect(() => {
    if (localStorage.getItem("timer")) {
      let localTime = JSON.parse(localStorage.getItem("timer"));
      setTime({ minutes: localTime.minutes, seconds: localTime.seconds });
    }
    if (window) {
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible'
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rePassword != reMatchPassword) {
      toast.error('Password not matched');
      return;
    } else if (rePassword.length < 8) {
      toast.error('Password must be atleast 8 characters');
      return;
    } else if (fullName.split(" ").length < 2) {
      toast.error('Please enter your full name');
      return;
    } else if (rePhoneNumber.length != 10) {
      toast.error('Please enter a valid mobile number');
      return;
    } else if (!reAgreed) {
      toast.warning('Please agree our policies');
      return;
    }
    confirmationResult
      .confirm(Otp)
      .then(async (result) => {
        // User signed in successfully.
        const user = result.user;
        setOpen(false);
        let response = await axios.post('/api/auth/phone',
          JSON.stringify({ $id: JSON.parse(localStorage.getItem("_id")) })
        )
        let res = await response.data
        if (res.ok) {
          toast.success('Phone No. Verified');
        }
      })
      .catch((error) => {
        toast.error(error);
      })
  }

  return <div className='bg-blue-00'>
    <Navigation menuList={[]} pageName="Create Account" />
    <div className='p-5 w-full bg-red-00 h-full'>
      <form onSubmit={handleSubmit} className='my-auto flex-col flex bg-blue-10 w-full gap-y-4'>
        <div id="recaptcha-container"></div>
        <div className='flex justify-center'><img className='h-16 w-16' src="/logo-light.jpg" /></div>
        <input required onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Full Name' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
        <input required onChange={(e) => {
          if (e.target.value.length <= 10) {
            setRePhoneNumber(e.target.value)
          }
        }
        } type='number' value={rePhoneNumber} placeholder='Mobile Number' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
        {open && <p>
          OTP send Successfully to{" "}
          <a className="text-rose-400 font-bold">{rePhoneNumber}</a>. You can resend in{" "}
          <a className="text-rose-400 font-bold">{`${time.minutes
            .toString()
            .padStart(2, "0")}:${time.seconds
              .toString()
              .padStart(2, "0")}`}</a>
        </p>
        }
        {open && <><OtpInput onOtpChange={() => { setOtp(Otp) }} >
        </OtpInput></>}
        {!open && <button type='button' disabled={open} onClick={() => {
          if (!isOpen) {
            if (
              JSON.parse(
                localStorage.getItem("timer")
              ).minutes === 4 &&
              JSON.parse(
                localStorage.getItem("timer")
              ).seconds === 59
            ) {
              const appVerifier =
                window.recaptchaVerifier;
              const auth = getAuth();
              signInWithPhoneNumber(
                auth,
                `+91${rePhoneNumber}`,
                appVerifier
              )
                .then((confirmationResult) => {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  window.confirmationResult =
                    confirmationResult;
                  setOpen(true);
                  setIsOpen(true);
                  setIsOtpSend(true)
                  // ...
                })
                .catch((error) => {
                  console.warn(error);
                  grecaptcha.reset(window.recaptchaWidgetId);
                  toast.warn(error.code)
                });
            }
          } else {
            setOpen(true);
          }
        }}
          className="block cursor-default lg:cursor-pointer px-4 py-2 ml-auto text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-gray-600 border border-transparent rounded-lg active:bg-gray-800 hover:bg-gray-800 focus:outline-none focus:shadow-outline-rose"
        >
          Send OTP
        </button>}


        <input required onChange={(e) => setRePassword(e.target.value)} type='password' placeholder='Password' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
        <input required onChange={(e) => setReMatchPassword(e.target.value)} type='password' placeholder='Reenter Password' className='block focus:border-[#f8cd31] shadow-sm placeholder:text-zinc-400 px-3 py-2.5 outline-none text-gray-700 bg-zinc-50 font-medium w-full border-2 rounded-lg border-gray-200' />
        <Switch.Group as="div" className="flex cursor-default gap-x-4 sm:col-span-2 mb-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={reAgreed}
              onChange={setReAgreed}
              className={classNames(
                agreed ? 'bg-[#f8cd31]' : 'bg-gray-200',
                'flex w-8 flex-none cursor-default rounded-full p-px ring-2 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
            >
              <span className="sr-only">Agree Terms</span>
              <span
                aria-hidden="true"
                className={classNames(
                  reAgreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm font-medium leading-6 text-gray-600">
            Agree our{' '}
            <a href="#" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>

          </Switch.Label>
        </Switch.Group>
        <FilledButton type={'submit'} disabled={!isOtpSend} lable="Create Account" />
      </form>
    </div>
  </div>

}

export default Login