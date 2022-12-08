import React from 'react'
import Sidenav from '../components/Sidenav/Sidenav'
import Userdetails from '../components/Userdetails/Userdetails'
import Topnavbar from '../components/Topnavbar/Topnavbar'

export default function ProfilePage() {
  return (
    <div >
      <Topnavbar/>
      <div style={{display:"flex"}}>
      <Sidenav/>
      <Userdetails/>
      </div>
    </div>
  )
}
