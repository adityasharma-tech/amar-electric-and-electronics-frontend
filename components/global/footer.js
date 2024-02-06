import React from 'react'
import Link from 'next/link'

export default async function Footer() {

    return (
        <footer className="bg-zinc-100 mb-7">
            <div className="w-full h-2 bg-zinc-200" />
            <div className="py-5 pt-10">
                <div className="text-center font-medium text-lg">
                Discover the power of innovation
                </div>
                <div className="text-center text-sm text-gray-600 py-2 font-medium">
                One Stop Destination for Electronics Enthusiasts
                    <br /> Pay on Delivery | Free Delivery
                </div>
                <div className="border-b mx-5 border-gray-300 my-2"></div>
            </div>
            <div className="grid grid-cols-2 gap-y-3 px-5">
                <Link href="/contactUs">
                    <span className="w-full font-medium text-sm text-gray-700">
                        Contact Us
                    </span>
                </Link>
                <Link href="/privacyPolicy">
                    <span className="w-full font-medium text-sm text-gray-700">
                        Legal and Policies
                    </span>
                </Link>
                <Link href="/refundAndCancellation">
                    <span className="w-full font-medium text-sm text-gray-700">
                        Refunds And Cancellation
                    </span>
                </Link>
                <Link href="/shipAndDelivery">
                    <span className="w-full font-medium text-sm text-gray-700">
                        Shipment And Delivery
                    </span>
                </Link>
                <Link href="/termsAndConditions">
                    <span className="w-full font-medium text-sm text-gray-700">
                        Terms And Conditions
                    </span>
                </Link>
            </div>
            <div className="py-10 flex flex-col gap-y-2 px-5">
                <span style={{
                    fontSize: "15px"
                }} className="font-bold text-sm">Reach out to us</span>
                <div className="flex flex-row gap-x-5">
                    <Link href="/">
                        <img
                            className="h-6 w-6 object-cover"
                            src="https://facebook.com/favicon.ico"
                        />
                    </Link>
                    <Link href="/">
                        <img
                            className="h-6 w-6 object-cover"
                            src="https://instagram.com/favicon.ico"
                        />
                    </Link>
                    <Link href="/">
                        <img
                            className="h-6 w-6 object-cover"
                            src="https://youtube.com/favicon.ico"
                        />
                    </Link>
                    <Link href="/">
                        <img
                            className="h-6 w-6 object-cover"
                            src="https://linkedin.com/favicon.ico"
                        />
                    </Link>
                    <Link href="/">
                        <img
                            className="h-6 w-6 object-cover"
                            src="https://x.com/favicon.ico"
                        />
                    </Link>
                </div>
            </div>
            <div className="py-10 flex flex-col gap-y-2 px-5">
                <span className="font-bold text-base">Contact Us</span>
                <div className="flex flex-col">
                    <p className="text-xs text-gray-700">
                        Amar Electric And Electronics,
                        <br /> Obra, Aurangabad, Bihar (INDIA) - 824124
                        <br /> Bihar, India
                        <br /> E-mail address: <a href="mailto:contact@adityasharma.tech"></a>contact@adityasharma.tech
                        <br />© 2022-2024 store.adityasharma.tech
                    </p>
                </div>
            </div>
        </footer>
    )
}