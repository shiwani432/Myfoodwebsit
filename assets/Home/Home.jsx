import React, { useState } from 'react'
// import'./Home.css'
import Cart from '../Cart/Cart'
import Head from '../Header/Head'
import ExplorMenu from '../explorMenu/ExplorMenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay'


const Home = () => {
  const [cat,setCat] = useState("All")
  
  return (
    <div>

     <Head/>
    
     <ExplorMenu cat={cat} setCat={setCat} />
     <FoodDisplay cat={cat}/>
     
    </div>
  )
}

export default Home
