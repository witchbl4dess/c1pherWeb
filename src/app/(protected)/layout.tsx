import React from 'react'
import Sidebar from "@/app/(protected)/_components/sideBar.tsx"
import InfoBar from './_components/infoBar'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  )
}

export default Layout