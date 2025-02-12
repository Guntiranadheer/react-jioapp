
import React from 'react'
import Navbar from '../Components/Navbar'
import Mobile from '../Components/Mobile'
import True5g from '../Components/True5g'
import Jiofiber from '../Components/Jiofiber'
import Airfiber from '../Components/Airfiber'
import Business from '../Components/Business'
import Devices from '../Components/Devices'
import Apps from '../Components/Apps'
import Support from '../Components/Support'
import { Route,Routes } from 'react-router-dom'


export const Landingpage = () => {
  return (
    
    <>
    <Navbar/>
    <Routes>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/True5g' element={<True5g/>}/>
      <Route path='/Jiofiber' element={<Jiofiber/>}/>
      <Route path='/Airfiber' element={<Airfiber/>}/>
      <Route path='/Bussiness' element={<Business/> }/>
      <Route path='/Devices' element={<Devices/> }/>
      <Route path='/Apps' element={<Apps/>  }/>
      <Route path="Support" element={<Support/>}></Route>
      
    </Routes>
        
 </>
    
  )
}
