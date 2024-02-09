"use client"
import axios from 'axios'
import Navigation from '@/app/navigation'
import React, { useState, useEffect } from "react"
import { redirect } from 'next/navigation'
import CartSkeleton from '@/components/skeleton/cart'
import { Player } from "@lottiefiles/react-lottie-player"
import { useSession } from 'next-auth/react';
import PwOrderStyle from './style'
import { downloadFile } from '@/app/(v1)/lib/utils'
import { useToast } from '@/components/ui/use-toast'
import Loading from './loading'
import { Button } from '@/components/ui/button'
import { v4 as uuidv4 } from 'uuid'
import Rating from 'react-rating'
import { useSelector } from 'react-redux'

const Orders = ({ params }) => {
  const { toast } = useToast()
  function getStatusDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return formattedDate;
  }
  const order_id = params.order_id
  const handleCopy = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast({ description: "Copied to Clipboard" })
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const { desktop_mode } = useSelector((state)=>state.app)
  const [loading, setLoading] = React.useState(false)
  const [feedbackEnable, setFeedbackEnable] = useState(false)
  const [feedbackColapsed, setFeedbackColapsed] = useState(false)
  const { data: session, status } = useSession();
  const [data, setData] = useState(null)
  const fetchUser = async () => {
    setLoading(true)
    try {
      let response = await axios.get(`/api/user/orders/order/${order_id}`)
      let res = await response.data
      setData(JSON.parse(atob(res.data)))
      // console.log(JSON.parse(atob(res.data)))
    } catch (error) {
      console.log(error)
      toast({ variant: 'distructive', title: 'Error Occured', description: error?.message})
    } finally {
      setLoading(false)
    }
  }

  const [feedback, setFeedback] = React.useState('')
  const [rating, setRating] = React.useState(0)
  const [submitingFeedback, setSubmitingFeedback] = React.useState(false)
const [feedSubmited, setFeedSubmited] = useState(false)
  function checkFeedback(){
    const feedbacks = localStorage.getItem('feedbacks')
    console.log(typeof(feedbacks))
  }
  // checkFeedback()
  async function handleFeedbackSubmit(e){
    e.preventDefault()
    setSubmitingFeedback(true)
    const products = data.order.products.map(i=>({_id: i.slug}))
    try {
      let response = await axios.post(`/api/user/feedback`, {
        _id: uuidv4(),
        feedback,
        rating,
        products
      })
      let res = await response.data
      const local_feedback = JSON.parse(localStorage.getItem('feedbacks') ?? '[]') ?? []
      localStorage.setItem('feedbacks', [...local_feedback, data.orderId])
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitingFeedback(false)
    }
  }
  useEffect(() => {
    if (status === "authenticated") {
      fetchUser()
      setFeedbackEnable(true)
    }
  }, [status])
  if (status === "loading") {
    return <Loading />
  }
  if (!session) {
    redirect('/user')
  } else {
    return (
      <>
        <PwOrderStyle />
        <Navigation menuList={[]} pageName={"Order"} />
        {!data && <Loading />}
          <form onSubmit={handleFeedbackSubmit} className={`lg:w-[30%] ${feedbackEnable ? "scale-100" : "scale-0 h-12"}  opacity-95 hover:opacity-100 transition-all duration-300 px-3 py-3 w-[98%] md:w-[50%] min-h-20 bg-blue-50 flex flex-col justify-center border-blue-200 border fixed ${desktop_mode ? 'bottom-0 right-0 m-6' : 'bottom-20 left-0 right-0 mx-auto'} z-50 rounded-xl`}>
            <Button disabled={submitingFeedback} onClick={() => setFeedbackColapsed(!feedbackColapsed)} type="button" variant="icon" className="absolute right-2 top-2 bg-slate-300 px-1 py-1 h-auto">{feedbackColapsed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>}
            </Button>
            <h1 className='text-lg transition-all font-semibold w-full text-center'>Order Feedback</h1>
            <React.Fragment>
              {feedbackColapsed ? null :<Rating onChange={(value)=>setRating(value)} onClick={(value)=>console.log(value)} className={`mx-auto mt-3 transition-all`} emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 stroke-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>} fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 fill-yellow-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>} placeholderSymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 stroke-gray-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>} />}
              <textarea value={feedback} onChange={(e)=>setFeedback(e.target.value)} style={{
                display: feedbackColapsed ? 'none' : ''
              }} className='rounded-xl transition-all border-gray-200 mx-5 border focus:outline-none focus:border-gray-200 px-2 py-2 text-sm' placeholder='Share your feedback.' />
                {feedSubmited ? <div className='w-auto py-2 bg-blue-300/20 flex flex-col justify-center border mt-3 mx-5 rounded-xl border-blue-600'>
                  <h4 className='w-full text-center font-medium text-base'>Feedback Submited</h4>
                </div> : null}
              <Button disabled={submitingFeedback} style={{
                display: feedbackColapsed ? 'none' : ''
              }} className="mx-5 my-2 transition-all bg-blue-600 hover:bg-blue-700 rounded-xl">Submit Feedback</Button>
            </React.Fragment>
          </form>
        <main className="fit mb-14">
          {data && data?.order && (
            <div className="px-3 md:px-0">
              <div className="py-2 mx-auto max-w-7xl px-0 md:px-3 w-full">
                <div className="max-w-[1062px] lg:shadow-all-round lg:p-5 m-auto rounded-xl border shadow-xl">
                  <div className="flex justify-between flex-col">
                    <div className="flex justify-between items-center border-b lg:border-0 p-2 md:pt-0">
                      <div className="flex space-x-2">
                        <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                          <span className="text-grey"> Order Id:</span>
                        </span>
                        <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                          <span className="text-primary">
                            {order_id}
                          </span>
                        </span>
                        <svg
                          onClick={() => {
                            handleCopy(order_id);
                          }}
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="ml-2 cursor-pointer"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"></path>
                        </svg>
                      </div>
                      <div>
                        {data.order?.shipment?.order_id && <button onClick={async () => {
                          let response = await fetch(`/api/user/orders/order/invoice?order_id=${data.order?.shipment?.order_id}`, {
                            method: 'POST'
                          })
                          let res = await response.json()
                          if (res?.data?.is_invoice_created && response.status === 200) {
                            downloadFile(res?.data?.invoice_url, res?.data?.invoice_url.split("/")[res?.data?.invoice_url.split("/").length - 1])
                          } else {
                            toast({
                              description: "Invoice not uploaded yet",
                              variant: "destructive"
                            })
                          }
                        }}
                          className="text-[color:var(--link-1)] font-semibold underline"
                        >
                          Invoice
                        </button>}
                      </div>
                    </div>
                    <div className="flex lg:space-x-6 mt-2 flex-col lg:flex-row" id="breakup">
                      <div className="flex-1">
                        {data.order.products.map((item) => (
                          <div
                            key={item.product._id}
                            className="flex mb-2 space-x-2 lg:space-x-4 lg:px-0 md:px-3 px-2"
                          >
                            <a>
                              <div className="rounded-lg overflow-hidden bg-gray-100 p-2 min-w-[120px]">
                                <div className="max-w-full w-[120px] h-[120px] relative">
                                  <div
                                    className="w-full h-full rounded bg-center bg-no-repeat bg-contain"
                                    style={{
                                      backgroundImage: `url(${item.product.thumbnail.secure_url})`,
                                      backgroundSize: "cover",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </a>
                            <div className="flex flex-col justify-between">
                              <a>
                                <span className="Typography_heading7__gujRQ font-semibold Typography_root__TxCor">
                                  <span className="text-base">{item.product.title}</span>
                                </span>
                              </a>
                              <div>
                                <div className="flex space-x-1 mb-2">
                                  <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                                    <span className="text-gray-500">
                                      {" "}
                                      Quantity :
                                    </span>
                                  </span>
                                  <span className="Typography_small__10WKi font-bold Typography_root__TxCor">
                                    <span className="text-gray-500">
                                      {" "}
                                      {item.quantity}
                                    </span>
                                  </span>
                                </div>
                                <span className="Typography_heading3__j28fo font-semibold Typography_root__TxCor">
                                  <span className="text-primary">
                                    {" "}
                                    ₹{item.product.pricing.offerPrice}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="pt-4 px-4 space-y-1">
                          <div className="flex space-x-1">
                            <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                              <span className="text-gray-500">
                                Delivery Partner :
                              </span>
                            </span>
                            <span className="Typography_small__10WKi font-bold Typography_root__TxCor">
                              <span className="text-primary">Shiprocket</span>
                            </span>
                          </div>
                          <div className="flex space-x-1 items-start lg:items-center flex-col space-y-2 lg:flex-row">
                            {data.order?.shipment ? <div className="flex">
                              <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                                <span className="text-gray-500">
                                  {" "}
                                  Tracking Id :
                                </span>
                              </span>
                              <span className="Typography_small__10WKi font-bold Typography_root__TxCor">
                                <span className="text-primary">
                                  {" "}
                                  &nbsp; {data.order?.shipment?.shipment_id}
                                </span>
                              </span>
                              <svg
                                onClick={() => {
                                  handleCopy(data.order?.shipment?.shipment_id);
                                }}
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 24 24"
                                className="ml-2 cursor-pointer"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M18 2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H9V4h9v12zM3 15v-2h2v2H3zm0-5.5h2v2H3v-2zM10 20h2v2h-2v-2zm-7-1.5v-2h2v2H3zM5 22c-1.1 0-2-.9-2-2h2v2zm3.5 0h-2v-2h2v2zm5 0v-2h2c0 1.1-.9 2-2 2zM5 6v2H3c0-1.1.9-2 2-2z"></path>
                              </svg>
                            </div> : null}
                            <div>
                              {data.order?.shipment ? <Button variant="outline">Track Order</Button> : null}
                            </div>
                          </div>
                        </div>
                        <div className="py-4 px-4">
                          <span className="font-semibold Typography_root__TxCor">
                            <span className="text-grey"> Status</span>
                          </span>
                          {/* Status Start Here */}
                          <div className="mt-3">
                            {data.order.status.map((item, index) => (
                              <div key={index} className="flex flex-col">
                                <div className="flex items-center space-x-3">
                                  <div
                                    className="rounded-full w-5 h-5 flex justify-center items-center"
                                    style={{
                                      backgroundColor: "rgb(59, 181, 74)",
                                    }}
                                  >
                                    <svg
                                      width="12"
                                      height="10"
                                      viewBox="0 0 12 10"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.535 2.24529L4.435 9.34527L0.458008 5.39628L2.077 3.80529L4.435 6.13728L9.91798 0.654297L11.535 2.24529Z"
                                        fill="white"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div className="flex-1 flex flex-col relative">
                                    <span className="text-[14px] font-bold capitalize">
                                      {item.status}
                                    </span>
                                    <div className="absolute top-3 mt-0.5">
                                      <span className="text-[14px] font-medium text-[#575757] inline-block leading-4">
                                        {getStatusDate(item.timestamp)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {data.order.status.length - 1 != index && <div
                                  className="w-[1px] h-[25px] border border-1 border-dashed border-gray-300 ml-2.5 my-1"
                                  style={{ borderColor: "rgb(59, 181, 74)" }}
                                ></div>}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="mt-4 px-4">
                          <span className="Typography_small__10WKi font-medium Typography_root__TxCor">
                            <span className="text-gray">
                              You Cannot Cancel This Order Now
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 mt-10 border-t pt-4 lg:pt-0 lg:border-0 lg:mt-0 px-3 lg:px-0">
                        <div>
                          <span className="font-semibold Typography_root__TxCor">
                            <span className="text-grey"> Shipping Details</span>
                          </span>
                          <div className="pt-3">
                            <span className="Typography_heading7__gujRQ font-bold Typography_root__TxCor">
                              <span className="text-primary">
                                {" "}
                                {data.order.orderId}
                              </span>
                            </span>
                            <div className="mt-1">
                              <span className="Typography_small__10WKi font-medium Typography_root__TxCor">
                                <span className="text-primary">
                                  {`${data.order.address.fullName}\n${data.order.address.flatOrBuilding}, ${data.order.address.areaOrStreet}\n${data.order.address.landmark}\n${data.order.address.townOrCity}, ${data.order.address.pincode}\n${data.order.address.state}, ${data.order.address.country}`}
                                </span>
                              </span>
                            </div>
                            <div className="mt-1">
                              <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                                <span className="text-primary">
                                  Phone Number : {data.order.address.mobileNumber}
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <div>
                            <span className="font-semibold Typography_root__TxCor">
                              <span className="text-grey"> Price Breakup</span>
                            </span>
                            <div className="pt-3 bg-[#FBFBFB] rounded-lg p-6 mt-2">
                              {data.order.products.map((item) => (
                                <div
                                  key={item.product._id}
                                  className="flex justify-between pb-3"
                                >
                                  <span className="pr-3">
                                    <span className="Typography_small__10WKi font-medium Typography_root__TxCor">
                                      <span className="text-gray">
                                        {item.quantity} x {item.product.title.slice(0, 50)}
                                        {item.product.title.length > 49 && "..."}
                                      </span>
                                    </span>
                                  </span>
                                  <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                                    <span className="text-primary">
                                      {" "}
                                      ₹{item.product.pricing.offerPrice}
                                    </span>
                                  </span>
                                </div>
                              ))}
                              <div
                                className="flex justify-between pb-3 border-b"
                              >
                                <span className="pr-3">
                                  <span className="Typography_small__10WKi font-medium Typography_root__TxCor">
                                    <span className="text-gray">
                                      Delivery Charge
                                    </span>
                                  </span>
                                </span>
                                <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                                  <span className="text-primary">
                                    {" "}
                                    ₹{data.order.pricing.shipping}
                                  </span>
                                </span>
                              </div>
                              <div className="flex justify-between mt-3">
                                <span className="Typography_heading7__gujRQ font-bold Typography_root__TxCor">
                                  <span className="text-primary"> Total</span>
                                </span>
                                <span className="Typography_heading7__gujRQ font-bold Typography_root__TxCor">
                                  <span className="text-primary">
                                    {" "}
                                    ₹{data.order.payableAmount}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="pt-3 bg-[#FBFBFB] rounded-lg p-6 mt-2">
                              <div className="flex justify-between pb-3 border-b">
                                <span className="font-semibold Typography_root__TxCor">
                                  <span className="text-gray">
                                    {" "}
                                    Total Order Price
                                  </span>
                                </span>
                                <span className="Typography_small__10WKi font-semibold Typography_root__TxCor">
                                  <span className="text-primary">
                                    {" "}
                                    ₹{data.order.payableAmount}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        {!data?.order && !loading && <div className='w-full h-full flex flex-col'>
          <div className='py-auto'>
            <Player
              autoplay
              loop
              src="/lottie/no-orders.json"
              className=''
              style={{ height: '300px', width: '300px' }}
            >
              <div className='text-lg mt-3 mb-auto text-gray-700 text-center font-medium'>No orders found</div>
            </Player>
          </div>
        </div>}
      </>
    )
  }
};

export default Orders;
