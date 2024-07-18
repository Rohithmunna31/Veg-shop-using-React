// VegetableItem.js

import React from 'react';
import "./VegetableItem.css";

const VegetableItem = ({ veg, index, handleBuy, handleDelete, handleBuyQuantityChange, buyQuantity }) => {
  return (
    <li style={{ marginBottom: '10px' }}>
      {veg.vegName} - {veg.price} - {veg.quantity}
      <span style={{ marginLeft: '10px' }}>
        <input
          type="number"
          placeholder="Quantity to buy"
          value={buyQuantity || ''}
          onChange={(e) => handleBuyQuantityChange(index, e.target.value)}
        />
      </span>
      <span style={{ marginLeft: '10px' }}>
        <button onClick={() => handleBuy(index)}>Buy</button>
        <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
      </span>
    </li>
  );
};

export default VegetableItem;
