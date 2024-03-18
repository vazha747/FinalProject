import React from 'react'
import SideBar from '../navigation/sideBar'
import Info from './info'
const page = () => {
  return (
    <div>
      <div>
      <SideBar />
      </div>
      <div>
        <Info />
      </div>
    </div>
  )
}

export default page