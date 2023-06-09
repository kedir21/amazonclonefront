import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import CheckOut from './Components/CheckOut/CheckOut'
import Login from './Components/Login/Login'
import Orders from './Components/Orders/Orders'
const myRoute = () => {
  return (
    <>

<Routes>
<Route  index  element={<Home />}      />  
<Route  path='/checkout'  element={<CheckOut />}      />  
<Route  path='/orders'  element={<Orders />}      />  
 

</Routes>

    </>
  )
}
export default myRoute