import React from 'react'
import Link from 'next/link'
const SideBar = () => {
  return (
    <div className='h-screen w-64'>
        <div>LOGO</div>
        <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/favorites">Favorites</Link></li>
        </ul>
    </div>
  )
}

export default SideBar