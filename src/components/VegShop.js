// VegShop.js

import React, { useState } from 'react';
import VegetableItem from './VegetableItem';
import "./VegShop.css";

const VegShop = () => {
  const [vegName, setVegName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [vegList, setVegList] = useState([]);
  const [buyQuantities, setBuyQuantities] = useState({});

  const handleAddVeg = () => {
    if (vegName && price && quantity) {
      const newVeg = { vegName, price, quantity: parseInt(quantity) };
      setVegList([...vegList, newVeg]);
      setVegName('');
      setPrice('');
      setQuantity('');
    }
  };

  const handleBuy = (index) => {
    const buyQuantity = buyQuantities[index];
    if (buyQuantity) {
      const newList = vegList.map((veg, i) => {
        if (i === index) {
          const updatedQuantity = veg.quantity - buyQuantity;
          return { ...veg, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
        }
        return veg;
      });
      setVegList(newList);
      setBuyQuantities({ ...buyQuantities, [index]: '' });
    }
  };

  const handleDelete = (index) => {
    const newList = vegList.filter((_, i) => i !== index);
    setVegList(newList);
  };

  const handleBuyQuantityChange = (index, value) => {
    setBuyQuantities({ ...buyQuantities, [index]: parseInt(value) });
  };

  return (
    <div>
      <h1>VegShop</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={vegName}
          onChange={(e) => setVegName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={handleAddVeg}>Add to Shop</button>
      </div>
      <div>
        <h2>Vegetables List</h2>
        <p>Total items: {vegList.length}</p>
        <ul>
          {vegList.map((veg, index) => (
            <VegetableItem
              key={index}
              veg={veg}
              index={index}
              buyQuantity={buyQuantities[index]}
              handleBuy={handleBuy}
              handleDelete={handleDelete}
              handleBuyQuantityChange={handleBuyQuantityChange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VegShop;
