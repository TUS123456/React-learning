import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../Context/Context';



const Product = (props) => {
  const Cart = useContext(UserContext);

  return (
    <div>
      <li>
        <h2>
          {props.name}-{props.price}{' '}
          <button
            onClick={() => {
              Cart.setuserdata([...Cart.userdata ,{name: props.name,price:props.price}, ])
             }}>Add to Cart</button></h2></li></div>);};

export default Product;