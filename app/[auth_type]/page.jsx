"use client"
import React, { useEffect, useLayoutEffect } from "react"
import { Input } from "@/components/ui/input"
const jwt = require("jsonwebtoken")
import {
  CountryCodeSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./countrySelect"
import { Button } from "@/components/ui/button"
import OtpInput from "./otpInput"
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import {
  setFullname,
  setMobileNumber,
  setAuthType,
  setOtpValue,
  setGeolocationData,
  setPassword,
  setMatchPassword,
  setCurrentState,
  setEnabled,
  setLoading
} from '@/lib/slices/authSlice';
import Head from "next/head"
import { redirect, useRouter } from "next/navigation"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import Loading from "./loading"
import OTPTimer from "./otpTimer"
import { signIn, useSession } from "next-auth/react"
import { getAuthJwt } from "@/lib/utils"
import CryptoJS from "crypto-js"
import { setDesktopMode } from "@/lib/slices/appSlice"

export default function Auth({ params }) {
  const { data: session, status } = useSession();
  /* Toolkit */
  const { fullname, mobile_number, auth_type, loading, otp_value, password, match_password, geo_location_data, current_state, enabled } = useSelector((state) => state.auth);
  const { desktop_mode } = useSelector(state => state.app)
  
  /* Hooks */
  const dispatch = useDispatch()
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
  const router = useRouter()
  const { toast } = useToast()

  /* Firebase Auth */
  const firebaseConfig = {
    apiKey: "AIzaSyCxm-aL7N4OiO_ra5Jc_sYevCM66P95SrU",
    authDomain: "alishanshowrrom.firebaseapp.com",
    projectId: "alishanshowrrom",
    storageBucket: "alishanshowrrom.appspot.com",
    messagingSenderId: "360042216819",
    appId: "1:360042216819:web:b2fe83fbae1f223d23d906",
  };
  const app = initializeApp(firebaseConfig)

  /* Function */
  const handleGetGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const geolocation = {
            accuracy: position.coords.accuracy,
            driftThreshold: 200.0,
            highConfidence: false,
            latitude: latitude.toFixed(7), // Limit decimal places for cleaner display
            longitude: longitude.toFixed(7), // Limit decimal places for cleaner display
          };
          dispatch(setGeolocationData(geolocation));
        },
        (error) => {
          console.error('Error getting geolocation:', error.message);
          dispatch(setGeolocationData(null));
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      dispatch(setGeolocationData(null));
    }
  };
  const createUser = async uid => {
    await dispatch(setLoading(true))
    try {
      let response = await axios.post('/api/user/create',
        JSON.stringify({
          uid,
          name: fullname,
          phoneNumber: mobile_number,
          password: password,
          verified: true,
          address: [],
          locale: "IN",
          active: true,
          blocked: false,
          pincode: null,
          mapData: geo_location_data ?? null
        })
      )
      let res = await response.data
      if (res.already_exists) {
        const jwt_token = await getAuthJwt()
      if (!res.onboard) localStorage.setItem('onboard_token', res.onboard_token)
        await signIn("credentials", {
          phoneNumber: res.mobile_number,
          password: "",
          otp_verification: true,
          otp_jwt: jwt_token,
          redirect: true,
        });
      } else {
        dispatch(setCurrentState("otp_verified"))
      }
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }
  const updateUser = async () => {
    await dispatch(setLoading(true))
    try {
      let response = await axios.put('/api/user/create',
        JSON.stringify({
          fullname,
          mobile_number,
          password
        })
      )
      let res = await response.data
      if (res.ok) {
        const jwt_token = await getAuthJwt()
        toast({ description: "Saved Successfully" })
        await localStorage.removeItem("onboard_token")
        const result = await signIn("credentials", {
          phoneNumber: res.mobile_number,
          password: "",
          otp_verification: true,
          otp_jwt: jwt_token,
          redirect: true,
        })
        router.push('/user')
      }
    } catch (error) {
      toast({ description: error.message })
      router.push('/auth/sign_in')
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    confirmationResult
      .confirm(otp_value)
      .then(async (result) => {
        // User signed in successfully.
        const user = result.user;
        toast({ description: "OTP verified" })
        createUser(user.uid)
      })
      .catch((error) => {
        toast({ description: error.code, variant: "destructive" });
      })
  }

  /* Use Effect Hooks */
  useEffect(() => {
    if (window) {
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible'
      })
    }
    if (localStorage.getItem('onboard_token')) {
      if (localStorage.getItem('onboard_token') == "Undefined"){
        localStorage.removeItem('onboard_token')
        return
      }
        const onboard_data = JSON.parse(CryptoJS.AES.decrypt(localStorage.getItem('onboard_token'), process.env.NEXT_PUBLIC_JWT_TOKEN).toString(CryptoJS.enc.Utf8))
        if (onboard_data) {
          dispatch(setCurrentState(onboard_data.current_state))
          dispatch(setMobileNumber(onboard_data.phoneNumber))
        }
    }
    handleGetGeolocation()
  }, [])
  useEffect(() => {
    dispatch(setAuthType(params.auth_type ?? "sign_in"))
  }, [auth_type])
  if (!session) {
    return <main className="w-screen flex h-screen">
      <div className={`${desktop_mode ? "w-5/12" : "w-full"} h-full`}>
        <div id="recaptcha-container"></div>
        {status === "loading" || loading ? <Loading /> :
          <><nav className="w-full py-5 px-5 flex">
            <button onClick={router.back} type="button" className="w-6 h-6" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} className="w-full stroke-slate-600 h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
          </nav>

            <form onSubmit={handleSubmit}>
              {current_state === "number_input" ? <section className="w-full h-full flex flex-col p-5">
                <div className="mt-24 flex flex-col justify-center">
                  <div className="w-full my-2"><span className="font-medium text-lg" style={{
                    fontFamily: "M PLUS Rounded 1c",
                    fontWeight: 700
                  }}>{auth_type === "sign_up" ? "Sign Up" : "Login"}</span>
                  </div>
                  <label className="pb-5">
                    <span className="text-gray-400 -mb-2" style={{
                      fontSize: '10px'
                    }}>Country</span>
                    <div className="w-full flex flex-row">
                      <CountryCodeSelect value={"IN"}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="+91" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem className="flex flex-row w-full" value="IN"> +91</SelectItem>
                        </SelectContent>
                      </CountryCodeSelect>
                      <Input value={mobile_number} onChange={(e) => {
                        if (e.target.value.length < 11 && !isNaN(e.target.value)) dispatch(setMobileNumber(e.target.value))
                      }} style={{
                        fontSize: "15px"
                      }} placeholder="Phone Number" type="tel" className="shadow-none text-lg rounded-none border-b border-t-0 px-2 border-l-0 focus-visible:ring-0 border-r-0 mt-auto mx-3" />
                    </div>
                  </label>
                  <Button type="button" onClick={() => {
                    dispatch(setLoading(true))
                    const appVerifier =
                      window.recaptchaVerifier;
                    const auth = getAuth();
                    signInWithPhoneNumber(
                      auth,
                      `+91${mobile_number}`,
                      appVerifier
                    )
                      .then((confirmationResult) => {
                        dispatch(setCurrentState("otp_input"))
                        dispatch(setLoading(false))
                        window.confirmationResult =
                          confirmationResult
                        OTPTimer.startTimer()
                        toast({ title: "Otp sent successfully", description: <OTPTimer onClick={() => { }} /> })
                      })
                      .catch((error) => {
                        dispatch(setLoading(false))
                        console.warn(error);
                        grecaptcha.reset(window.recaptchaWidgetId);
                        if (error.code) toast({ description: error.code, variant: "destructive" })
                      });
                  }}>Continue</Button>
                </div>
              </section>
                : current_state === "otp_input" ?
                  <section className="w-full h-full flex flex-col p-5">
                    <div className="mt-24 flex flex-col justify-center">
                      <div className="w-full my-2 flex flex-col gap-y-2">
                        <span className="font-medium" style={{
                          fontFamily: "M PLUS Rounded 1c",
                          fontWeight: 700,
                          fontSize: "16px"
                        }}>Enter OTP sent to {mobile_number}</span>
                        <button className="text-pink-600 font-medium flex" style={{
                          fontSize: '12px'
                        }}>CHANGE NUMBER</button>
                      </div>
                      <label className="mb-10 flex flex-col gap-y-2">
                        <OtpInput onOtpChange={(value) => dispatch(setOtpValue(value))} />
                        <OTPTimer onClick={() => {
                          dispatch(setLoading(true))
                          const appVerifier =
                            window.recaptchaVerifier;
                          const auth = getAuth();
                          signInWithPhoneNumber(
                            auth,
                            `+91${mobile_number}`,
                            appVerifier
                          )
                            .then((confirmationResult) => {
                              dispatch(setCurrentState("otp_input"))
                              dispatch(setLoading(false))
                              window.confirmationResult =
                                confirmationResult
                              OTPTimer.startTimer()
                              toast({ title: "Otp sent successfully", description: <OTPTimer onClick={() => { }} /> })
                            })
                            .catch((error) => {
                              dispatch(setLoading(false))
                              console.warn(error);
                              grecaptcha.reset(window.recaptchaWidgetId);
                              if (error.code) toast({ description: error.code, variant: "destructive" })
                            });
                        }} />
                      </label>
                      <Button type="submit">Verify</Button>
                    </div>
                  </section> : <section className="w-full h-full flex flex-col p-5">
                    <div className="mt-24 flex flex-col justify-center">
                      <div className="w-full my-2"><span className="font-medium text-lg" style={{
                        fontFamily: "M PLUS Rounded 1c",
                        fontWeight: 700
                      }}>{auth_type === "sign_up" ? "Sign Up" : "Login"}</span>
                      </div>
                      <label className="pb-5">
                        <span className="text-gray-400 -mb-2" style={{
                          fontSize: '10px'
                        }}>Full Name</span>
                        <div className="w-full flex flex-col gap-y-3">
                          <Input value={fullname} onChange={(e) => {
                            dispatch(setFullname(e.target.value))
                          }} style={{
                            fontSize: "15px"
                          }} placeholder="Name" type="text" className="shadow-none text-lg rounded-none border-b border-t-0 px-2 border-l-0 border-r-0 mt-auto" />
                          <Input value={password} onChange={(e) => {
                            dispatch(setPassword(e.target.value))
                          }} style={{
                            fontSize: "15px"
                          }} placeholder="Password" type="password" className="shadow-none text-lg rounded-none border-b border-t-0 px-2 border-l-0 border-r-0 mt-auto" />
                        </div>
                      </label>
                      <Button onClick={updateUser} type="button">Continue</Button>
                    </div>
                  </section>}</form></>}
      </div>
      {desktop_mode ? <div className="w-7/12 h-full p-10 flex flex-col gap-y-5 justify-center" style={{
        backgroundColor: 'rgb(219 39 119 / 1)'
      }}>
        <img className="w-48 mx-auto -mt-10" src="/svg/undraw_secure_login.svg"/>
        <h1 className="text-4xl mx-auto text-white font-extrabold">Login / SignUp</h1>
      </div> : null}
    </main>
  } else {
    redirect('/user')
  }
}
