import React, { useState } from 'react'
import ExplorMenu from "../assets/explorMenu/ExplorMenu";
import FoodDisplay from '../assets/FoodDisplay/FoodDisplay';
import './Menu.css'


const Menu = () => {
    const [cat, setCat] = useState("All");

    return (
      <div className='menu-page'>
        
        <ExplorMenu cat={cat} setCat={setCat} />
        <FoodDisplay cat={cat} />
        
       
      </div>
    );
  };
export default Menu
