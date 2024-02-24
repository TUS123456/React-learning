import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';

const Cart = () => {
  const Userdata = useContext(UserContext);

  
  const total=Userdata.userdata.reduce((acc, item)=>acc+item.price,0);

  return (
    <div>
      <h1>Cart</h1>
      Cart Item
      {Userdata && Userdata.userdata ? (
        <ul>
          {Userdata.userdata.map((item) => (
            <li>
              Name: {item.name}
              <br />
              Price: ${item.price}
            </li>
          ))}
        </ul>
        
      ) 
      : (
        <h1>Data not present</h1>
      )}
      <h1>
        Total Amount:${total}
      </h1>
    </div>
  );
};

export default Cart;
