import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../Context/StoreContext.jsx'
import axios from 'axios'
import { assert } from 'console'
import { assets } from '../../assets/assets.js'

const MyOrders = () => {
    const{url,token}=useContext(StoreContext)
    const [data,setData]=useState([])
    const fetchOrders=async()=>{
        const response=await axios.post(url+"/api/order/userOrders",{},{headers:{token}})
        setData(response.data.data);
        
    }
    useEffect(()=>{
        if (token) {
            fetchOrders()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])
  return (
    <div className='myOrders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
            <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                    if(index===order.item.length-1){
                       return
                    }
                })}</p>
            </div>
           ) })}
        </div>
    </div>
  )
}

export default MyOrders
