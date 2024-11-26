import React from 'react'
import "./explore.css"
import { menu_list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const Explore = ({category,setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-text'>Choose From a diverse menu of traditional dishes, from the diverse regions of cameroon</p> 
      <div className="explore-menulist">
        {menu_list.map(( item,index)=>{
            return(
               <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menulist-items">
               <img src={item.menu_image} className={category===item.menu_name?"active" : ""} alt="" />
                <p>{item.menu_name}</p>
               </div>
        )         
        })}

      </div>
      <hr/>
    </div>
  )
}

export default Explore
