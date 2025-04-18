import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StorContext } from '../../Contaxt/StorContext';
import FoodItem from './FoodItem/FoodItem';

const FoodDisplay = ({ cat }) => {
    const { food_list } = useContext(StorContext);

    return (
        <div className='food-Display' id='food-Display'><br/><br/>
            <h2>Top dishes near you</h2>

            <div className="food-display-list">
                {food_list
                    .filter(item => cat === "All" || item.cat === cat)  // ✅ Filter properly
                    .map((item, index) => (
                        <FoodItem 
                            key={index}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FoodDisplay;
