import React, { useState } from 'react';
import './App.css';


function ThriftShop() {
  // Define state for items in the shop
  const [items, setItems] = useState([
    { id: 1, name: 'Vintage Dress', price: 20, quantity: 5 },
    { id: 2, name: 'Retro Sunglasses', price: 10, quantity: 10 },
    { id: 3, name: 'Leather Jacket', price: 50, quantity: 3 }
  ]);

  // Function to update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    setItems(prevItems => {
      // Find the item by id
      const updatedItems = prevItems.map(item => {
        if (item.id === id) {
          // Update quantity of the matched item
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  return (
    <div>
      <h1>Thrift Shop</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>Price: ${item.price}</div>
            <div>
              Quantity: {item.quantity}{' '}
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThriftShop;
