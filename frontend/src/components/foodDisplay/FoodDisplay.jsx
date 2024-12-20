import React, { useContext } from 'react'
import "./foodDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/foodItem'
// eslint-disable-next-line react/prop-types
const FoodDisplay = ({category}) => {
    const{food_list}=useContext(StoreContext)
  return (
    <div  className='foodDisplay' id='FoodDisplay'>
      <h2>Top Dishes Near You</h2>
      <div className="foodDisplay-list">
        {food_list.map((item,index)=> {
          if(category==='All'|| category===item.category){ 
            return(
                <FoodItem key={index} _id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>)
                
              }
         
          
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
