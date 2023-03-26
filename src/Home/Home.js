import React from 'react'
import Product from '../Product/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
// import CarouselFade from './HomeCarousel'



function Home() {
  return (
    <div className='home'>
       
        
        <div className='home__container'>
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51rrTUx5OhL._SX1500_.jpg"
          alt="banner"
        />
         {/* <CarouselFade /> */}
        
        <div className='home__row'>
          <Product  
            id="49538094"
            title="Double Pump Mens Button Down Shirts 100% Cotton Long Sleeve Shirts Regular Fit"
            price={29.24}
            rating={5}
            image="https://m.media-amazon.com/images/I/81gl3CDeAIL._AC_SR135,135_.jpg" 
          />
          
        <Product 
            id="12321341"
            title="Try spring fashion deals for free"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/PTBYB/JAN/GW/DQC/D1_DQC_PTBYB_JAN23_AF_W_Dresses_186x116._SY116_CB619622929_.jpg" 
            />
        <Product 
            id="1232141"
            title="PUMA Men's Standard Cloud9 Essentials Sweatpants"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/418qgSmhLCL._AC_UL320_.jpg" 
            />
          <Product  
            id="49538094"
            title="ASUS Men's Plus Size Crew Neck Long Sleeve Sweatshirt"
            price={24.24}
            rating={5}
            image="https://m.media-amazon.com/images/I/71-ecxHhmeL._AC_UL320_.jpg" 
          />          
                        

        </div>


        <div className="home__row">
         <Product  
            id="3254354345"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
            price={29.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL210_SR195,210_.jpg"/>         
          <Product   
            id="4903850"
            title="Eat to Beat Your Diet: Burn Fat, Heal Your Metabolism, and Live Longer"
            price={16.91}
            rating={4}
            image="https://m.media-amazon.com/images/I/51gMqu5li9L._SX321_BO1,204,203,200_.jpg" />
          <Product  
           id="23445930"
            title="SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 512GB Storage, 200MP Camera, Night..."
            price={1164.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71HtN4qqLZL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg" />
         
        </div>


        <div className="home__row">
        <Product 
            id="90829332"
            title="Hisense 55-Inch Class R6 Series Dolby Vision HDR 4K UHD Roku Smart TV with Alexa Compatibility (55R6G, 2021 Model)"
            price={1775.78}
            rating={5}
            image="https://m.media-amazon.com/images/I/61TXqF3hlUL._AC_SX425_.jpg"/>
        </div>


        <div className="home__row">
          <Product   
            id="4903850"
            title="Amazon Basics Executive Office Desk Chair with Armrests, Adjustable Height/Tilt, 360-Degree Swivel, 275Lb Capacity - Black/Pewter"
            price={160.91}
            rating={4}
            image="https://m.media-amazon.com/images/I/71UQ3ltXXpL._AC_SL1500_.jpg" />
          <Product  
           id="23445930"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
            price={64.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg" />
          <Product  
            id="3254354345"
            title="New Apple  MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
            price={2799.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81p5n9MO4QL._AC_SL1500_.jpg"/>
        </div>


        </div>
    </div>
  )
}

export default Home