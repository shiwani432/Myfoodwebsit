import React from 'react';
import './ExplorMenu.css';
import { menu_list } from '../AssetsFile';

const ExplorMenu = ({ cat, setCat }) => {  // <-- FIXED HERE
  return (
    <div className='Explor-Menu' id='manu-list'>
      <h1>Explore our Menu</h1>
      <p className="Explor-menu-text">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laboriosam vel laudantium repellendus laborum nobis eum necessitatibus distinctio fugit magni ut, 
       delectus enim cum! Dolores labore numquam distinctio earum molestiae? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione tenetur, assumenda temporibus harum hic, nesciunt repellat.
      </p> 
      
      <div className="Explor-menu-list">
        {
          menu_list.map((item, index) => (
            <div onClick={() => setCat(prev => prev === item.name ? "All" : item.name)} key={index} className="Explor-menu-list-item">
            <img className={cat === item.name ? "active" : ""} src={item.image} alt={item.name}  />
            <p><b>{item.name}</b></p>
          </div> 
          
          ))
        }
      </div>
      <hr/>
    </div>
  );
};

export default ExplorMenu;
