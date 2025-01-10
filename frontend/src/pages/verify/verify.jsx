import React from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useEffect } from 'react';

const Verify = () => {
    const [searchParams, setSearchParams]=useSearchParams();
    const success= searchParams.get('success');
    const orderId= searchParams.get('orderId');
    const {url}=useContext(StoreContext);
   const navigator=useNavigate()
    const verifyPayment = async()=>{
        const response= await axios.post(url + "/api/order/verify",{success,orderId})
        if(response.data.success){
            navigator("/myOrders")
        }
        else{
            navigator("/")
        }
    };
    useEffect(()=>{
        verifyPayment()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div className='verify'>
    <div className="spinner"></div>
    </div>
  )
}

export default Verify
