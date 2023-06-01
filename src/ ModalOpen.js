import Modal from "react-modal";
import React, { useState } from "react";
import options from './FoodList';
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes } from "./actions/updateSelectedDishes";

const ModalOpen = ({ Menu, closeModalFn }) => {
	const dispatch = useDispatch();
	const selectedDishes = useSelector((state) => state.selectedDishes);

	const toggleDishSelection = (dish) => {
    const isSelected = selectedDishes.some(
		(selected) => selected.value === dish.value
    );

    if (isSelected) {
      const updatedSelection = selectedDishes.filter(
        (selected) => selected.value !== dish.value
      );
      dispatch(updateSelectedDishes(updatedSelection));
    } else {
      dispatch(updateSelectedDishes([...selectedDishes, dish]));
    }
  };

	return (
    <div className="App">
		<Modal
        className="modal fixed right-0 top-0 bottom-0 w-1/2 bg-white overflow-y-auto"
        isOpen={true}
        onRequestClose={closeModalFn}
        shouldCloseOnOverlayClick={true}
		>
        <div>
			<h1>Your Select Menu is {Menu}</h1>
			<div className="flex flex-wrap justify-center">
            {options.map((dish) => (
				<div
                key={dish.value}
                className={`w-32 h-32 bg-blue-200 m-2 flex items-center justify-center rounded-lg ${
					selectedDishes.some(
                    (selected) => selected.value === dish.value
					)
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                onClick={() => toggleDishSelection(dish)}
				>
                {dish.label}
				</div>
            ))}
			</div>
        </div>
		</Modal>
    </div>
	);
};

export default ModalOpen;
