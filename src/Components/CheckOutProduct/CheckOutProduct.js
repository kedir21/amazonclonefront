import React from 'react';
import './CheckOutProduct.css';
import { useStateValue } from '../StateProvider';
import StarIcon from '@mui/icons-material/Star';
const CheckoutProduct = ({id,title,price,rating,image,hideButton}) => {
    const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
    return (
    <div className="checkoutProduct">
    <img className="checkoutProduct__image" src={image} alt="product-img"/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((p, i) => (
              <p key={i}><StarIcon /></p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
    )
}

export default CheckoutProduct;
