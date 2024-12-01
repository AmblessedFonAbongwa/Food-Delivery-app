import React, { useEffect, useState } from 'react'
import './list.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {
  const[List, SetList]=useState([])
  const fetchList= async ()=>{
    const response=await axios.get(`${url}/api/food/list`);    
    if(response.data.success){
      SetList(response.data.data)
    }else{
      toast.error('error')
    }
  }
  useEffect(()=>{
    fetchList();
   
  },[]);
  const clearFood=async(foodId)=>{
     const response=await axios.post(`${url}/api/food/remove`,{id:foodId});
       fetchList();
       if(response.data.success){
        toast.success('Food Successfully Removed')
       }
       else{
        toast.error('Error')
       }
 
  }
  return (
    <div className='list add flex-col'>
      <p>All Food&apos;s List</p>
      <div className="list-table">
        <div className="list-t-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {List.map((item,index)=>{
          return(
            <>
            <div key={index} className='list-t-format'>
              <img src={`${url}/images/`+item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className='cursor' onClick={()=>clearFood(item._id)}>X</p>
            </div>
            </>
          )
        })}
      </div>

      
    </div>
  )
}

export default List
