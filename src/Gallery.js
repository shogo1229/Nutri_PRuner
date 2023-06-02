import React, { useState } from 'react';
import options from './FoodList';

const GallerySelect = ({ SelectMenu }) => {
	const [selectedDishes, setSelectedDishes] = useState([]);

	const toggleDishSelection = (dish) => {
		const isSelected = selectedDishes.some((selected) => selected.value === dish.value);
		if (isSelected) {
	  	// 選択済みの場合、選択解除する
			const updatedSelection = selectedDishes.filter((selected) => selected.value !== dish.value);
			setSelectedDishes(updatedSelection);
		} else {
	  	// 選択されていない場合、追加する
			setSelectedDishes([...selectedDishes, dish]);
		}
	};

	return (
	<div>
		<h1> Select {SelectMenu} Menu</h1>
		<div className="flex flex-wrap justify-center">
		{options.map((dish) => (
			<div
			key={dish.value}
			className={`w-auto h-auto bg-blue-200 m-2 flex items-center justify-center rounded-lg ${
				selectedDishes.some((selected) => selected.value === dish.value)
				? 'border-2 border-blue-500'
				: ''
			}`}
			onClick={() => toggleDishSelection(dish)}
			>
			{dish.label}
			</div>
		))}
		</div>
	</div>
	);
};

export default GallerySelect;
