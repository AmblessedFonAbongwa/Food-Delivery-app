import React from 'react'
import Navbar from './components/navbar/navbar'
import SideBar from './components/sidebar/sideBar'

const App = () => {
  return (
   
    <div>
     <Navbar/>
     <hr />
     <div className="app-content">
    <SideBar/>
     </div>
      
    </div>
  )
}

export default App
