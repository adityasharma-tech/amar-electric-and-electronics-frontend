import '@/app/globals.css'
import Head from 'next/head'
export default function LoginLayout({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <style>
                {`.bottom-bar{
                display: none
            }
            .lds-ring {
                display: flex;
                justify-content: center;
                position: relative;
                width: 50px;
                height: 50px;
              }
              .lds-ring div {
                box-sizing: border-box;
                display: block;
                position: absolute;
                width: 40px;
                height: 40px;
                border: 5px solid #64CCC5;
                border-radius: 50%;
                animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                border-color: #64CCC5 transparent transparent transparent;
              }
              .lds-ring div:nth-child(1) {
                animation-delay: -0.45s;
              }
              .lds-ring div:nth-child(2) {
                animation-delay: -0.3s;
              }
              .lds-ring div:nth-child(3) {
                animation-delay: -0.15s;
              }
              @keyframes lds-ring {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              `}
            </style>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700&family=Varela+Round&display=swap" rel="stylesheet"/>
            </Head>
            {children}
        </>
    )
}