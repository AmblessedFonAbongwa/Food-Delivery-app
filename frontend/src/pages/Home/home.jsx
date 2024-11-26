import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/header'
import Explore from '../../components/ExploreMenu/Explore'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/appDownload/AppDownload'

const Home = () => {
  const[category,setCategory]=useState("All")
  return (
    <div>
      <Header/>
      <Explore category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
