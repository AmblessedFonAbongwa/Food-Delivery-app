/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext =createContext(null)

const StoreContextProvider =(props)=>{
const [cartItems,setCardItems]=useState({});
const url='http://localhost:4000';
const [token , setToken]=useState("")

 const addToCard =(itemId)=>{
     if(!cartItems[itemId]){
          setCardItems((prev)=>({...prev,[itemId]:1}))
     } else{
          setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
 }

 const clearFromCard=(itemId)=>{
     setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 };

 const getTotalCartAmount=()=>{
     let totalAmount=0
     for(const item in cartItems)
     { if(cartItems[item]>0){
           let itemInfo=food_list.find((product)=>product.id===item);
        totalAmount += itemInfo.price*cartItems[item]
     }

     }
     return totalAmount
 };

    useEffect(()=>{
if(localStorage.getItem('token')){
setToken(localStorage.getItem('token'));
}
    },[])

     const ContextValue={
       food_list,       
       cartItems, 
       setCardItems,
       addToCard,clearFromCard,
       getTotalCartAmount,
       token,
       setToken,
       url

     }
     return(
        <StoreContext.Provider value={ContextValue}>
   {props.children}
            </StoreContext.Provider>
     )
}
export default StoreContextProvider