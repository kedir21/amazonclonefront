import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../Components/StateProvider';

function Product({id,title,price,rating,image}) {
  const [{basket}, dispatch]= useStateValue();
  const addToBasket = () => {
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
    
  };

  return (

    <div className='product'>
      <div className="product__info" >
        <p>{title}</p>
        <p className='product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
        {Array(rating)
            .fill()
            .map(() => (
              <p><StarIcon /></p>
            ))}
        </div>
     </div>

        <img src={image} alt='tv' />

        <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product