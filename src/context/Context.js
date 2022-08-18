import React, { createContext, useContext, useReducer } from 'react';
import { Items } from './Data';
import { CartReducer, productReducer } from './Reducer';


const Cart = createContext();

const Context = ({children}) => {

    const products = Items.map((data) =>({
      id: data.id,
      name: data.name,
      price: data.price,
      imgSrc: data.imgSrc,
      ratings: data.ratings,
    }));

    const [state, dispatch] = useReducer(CartReducer,{
          products: products,
          cart: []
    });


    const [productState, productDispatch] = useReducer(productReducer, {
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    });
   

  return <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
    {children}
    </Cart.Provider>; 
};

export default Context;


export const CartState = () => {
  return useContext(Cart);
}

