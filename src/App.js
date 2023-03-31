import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CheckOut from './Components/CheckOut/CheckOut';
import { auth } from './Components/firebase';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Payment from './Components/Payment/Payment';
import { useStateValue } from './Components/StateProvider';
import Home from './Components/Home/Home';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import Orders from './Components/Orders/Orders';
const stripePromise = loadStripe(
  'pk_test_51MpmLRKGdWrfNB1orVGXouEPva0M9NBw0W6ol35jO9rFdtN6T3xGnSX0jsGYmXEKm5L2Yi54xSTHiw06ZVsHW0OH00zUUFP6Th'
);


function App() {
 const [{} , dispatch] =useStateValue();

 useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    
    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);




  return (
    <Router>
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Header />} />
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/checkout' element={<><Header /><CheckOut /></>} />
        <Route
            path="/Payment"
            element={ <> <Header />
             <Elements stripe={stripePromise}>

              <Payment />
             
             </Elements> </> }
          />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
