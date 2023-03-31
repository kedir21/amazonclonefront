import React from 'react'
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct'
import { useStateValue } from '../StateProvider'
import SubTotal from '../SubTotal/SubTotal'
import './CheckOut.css'


const CheckOut = () => {
  const [{basket}, dispatch]= useStateValue();
  return (
    <div className="checkout">
         <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout banner"
        />
        
          <h3>Hello </h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item ,i) => (
            <CheckOutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div> 
        <div className="checkout__right">
        <SubTotal />
    
      </div> 
        </div>
  )
}

export default CheckOut