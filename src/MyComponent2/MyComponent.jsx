import React, { useState } from 'react';

function MyComponent() {
  const [foods, setFoods] = useState(['Grapes', 'Watermelon', 'Carabao Mango']);

  function handleAddFood() {
    const newFood = document.getElementById('foodInput').value;
    document.getElementById('foodInput').value = '';

    setFoods(prevFoods => [...prevFoods, newFood])
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>

      <ul>
        {foods.map((food, index) => 
          <li 
            key={index}
            onClick={() => handleRemoveFood(index)}>
              {food}
          </li>
        )}
      </ul>

      <input type="text" id="foodInput" placeholder='Enter food name' />

      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default MyComponent;