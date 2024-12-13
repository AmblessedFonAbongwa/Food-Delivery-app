/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItems, setCardItems] = useState([]);
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const[food_list, setFoodList]=useState([])

  const addToCard = (itemId) => {
    if (!cartItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const clearFromCard = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    async function loadDate(){
      await fetchFood();   
       if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    }loadDate()
  }, [])
  const fetchFood=async()=>{
    const response= await axios.get(url+'/api/food/list');
   setFoodList(response.data.data)
  }

  const ContextValue = {
    food_list,
    cartItems,
    setCardItems,
    addToCard,
    clearFromCard,
    getTotalCartAmount,
    token,
    setToken,
    url,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
