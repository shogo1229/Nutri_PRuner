import React, { useState } from 'react';
import options from './FoodList';

const GallerySelect = ({ SelectMenu }) => {
	const [selectedDishes, setSelectedDishes] = useState([]);

	const handleDishSelect = (selectedOptions) => {
	setSelectedDishes(selectedOptions);
	};

	return (
	<div>
		<h1>Your Select Menu is {SelectMenu}</h1>
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
		<div key={index} className="w-32 h-32 bg-blue-200 m-2 flex items-center justify-center rounded-lg relative">
			{dish.label}
		</div>
		))}
		</div>
	</div>
	);
};

export default GallerySelect;
