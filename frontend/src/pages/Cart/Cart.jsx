import React, { useContext } from 'react'
import "./cart.css"
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const{cartItems,food_list,clearFromCard,getTotalCartAmount}=useContext(StoreContext)
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cartItems">
        <div className="cardItems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item.id]>0)
          {
            return(
              // eslint-disable-next-line react/jsx-key
              <><div className='cardItems-title cart-item-item'>
               <img src={item.image} alt="" />
               <p>{item.name}</p>
               <p>${item.price}</p>
               <p>{cartItems[item.id]}</p>
               <p>${item.price*cartItems[item.id]}</p>
               <p onClick={()=>{clearFromCard(item.id)}} className='cross'>X</p>
              </div>
              <hr /></>

            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div><hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div><hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>

          </div>         
        <button onClick={()=>(navigate('/PlaceOrder'))}>Proceed To Checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If You have a Promo Code Enter it here </p>
            <div className="cart-promo-input">
              <input type="text" placeholder='Promo Code'/>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart