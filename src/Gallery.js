import React, { useState } from 'react';
import options from './FoodList';

const Gallery = () => {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const handleDishSelect = (selectedOptions) => {
    setSelectedDishes(selectedOptions);
  };

  const handleDishRemove = (dish) => {
    const updatedDishes = selectedDishes.filter((selected) => selected.value !== dish.value);
    setSelectedDishes(updatedDishes);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {options.map((dish) => (
          <div
            key={dish.value}
            className={`w-32 h-32 bg-blue-200 m-2 flex items-center justify-center rounded-lg ${
              selectedDishes.some((selected) => selected.value === dish.value)
                ? 'border-2 border-blue-500'
                : ''
            }`}
            onClick={() => handleDishSelect([...selectedDishes, dish])}
          >
            {dish.label}
          </div>
        ))}
      </div>
      <h3>選ばれた料理:</h3>
      <div className="flex">
        {selectedDishes.map((dish, index) => (
          <div
            key={dish.value}
            className="w-32 h-32 bg-blue-200 m-2 flex items-center justify-center rounded-lg relative"
          >
            {dish.label}
            <button
              className="absolute top-0 right-0 rounded-full bg-red-500 text-white w-6 h-6 flex items-center justify-center"
              onClick={() => handleDishRemove(dish)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
