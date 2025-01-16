import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./orders.css";
import { useState } from "react";
import { useEffect } from "react";
import { assets } from "../../assets/assets";
// eslint-disable-next-line react/prop-types
const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchAllOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="order add">
      <h3>Order Page</h3>
    </div>
  );
};

export default Orders;
