import StreamVideoProvider from '@/providers/StramClientProvider'
import { Metadata } from 'next';
import React,{ReactNode} from 'react'

export const metadata: Metadata = {
  title: "Skyroom",
  description: "Video Calling App",
  icons: 'icons/logo.svg'
};


const Rootlayout = ({children}:Readonly<{children:ReactNode}>) => {
  return (
    <main>
        <StreamVideoProvider>
          {children}
        </StreamVideoProvider>
    </main>
  )
}

export default Rootlayout