import React, { useState } from 'react';
import './FoodItem.css';
// import { assets } from '../asset/AssetsFile';
import { assets } from '../../AssetsFile';


const FoodItem = ({ id, name, image, price, description }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleAdd = () => {
    setItemCount(prev => {
      const newCount = prev + 1;
      console.log(`Added: ${name}, Count: ${newCount}`);
      return newCount;
    });
  };

  const handleRemove = () => {
    setItemCount(prev => {
      if (prev > 0) {
        const newCount = prev - 1;
        console.log(`Removed: ${name}, Count: ${newCount}`);
        return newCount;
      }
      return prev;
    });
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={name} />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          ${price}
          {!itemCount ? (
            <button className="add" onClick={handleAdd}>Add to Cart</button>
          ) : (
            <div className="food-item-counter">
              <button onClick={handleRemove}>-</button>
              <p>{itemCount}</p>
              <button onClick={handleAdd}>+</button>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
