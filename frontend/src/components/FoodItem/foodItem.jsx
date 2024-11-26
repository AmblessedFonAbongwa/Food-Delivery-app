import React, { useContext } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
// eslint-disable-next-line react/prop-types
const FoodItem = ({id,name,price,image,description}) => {
  const {cartItems,addToCard,clearFromCard}=useContext(StoreContext);
  return (
    <div  className='foodItem-ele'>
        <div className="foodItem-Container">
          <img src={image} alt="" className="food-item-image" />
          {!cartItems[id]
          ?<img onClick={()=>addToCard(id)} className='add' src={assets.add_icon_white}/>
          :<div className="food-counter">
            <img onClick={()=>clearFromCard(id)}  src={assets.remove_icon_red} alt=""/>
           <p>{cartItems[id]}</p>
           <img src={assets.add_icon_green} onClick={()=>addToCard(id)} alt="" />
          </div>
        }
            </div>
                <div className="foodItem-info">
                <div className="foodItem-info-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                    <p className="foodItem-des">{description}</p>
                    <p className='foodItem-price'>${price}</p>
                        
    </div> 
     </div>
  )
}

export default FoodItem
