import Modal from "react-modal";
import React, { useState } from "react";
import options from './FoodList';
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_morning } from "./actions/updateSelectedDishes";

const ModalOpen_morning = ({ Menu, closeModalFn }) => {
	const dispatch = useDispatch();
	const selectedDishes_morning = useSelector((state) => state.selectedDishes_morning);

	const toggleDishSelection_morning = (dish_morning) => {
    const isSelected = selectedDishes_morning.some(
		(selected) => selected.value === dish_morning.value
    );

    if (isSelected) {
      const updatedSelection_morning = selectedDishes_morning.filter(
        (selected) => selected.value !== dish_morning.value
      );
      dispatch(updateSelectedDishes_morning(updatedSelection_morning));
    } else {
      dispatch(updateSelectedDishes_morning([...selectedDishes_morning, dish_morning]));
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
            {options.map((dish_morning) => (
				<div
                key={dish_morning.value}
                className={`w-32 h-32 bg-blue-200 m-2 flex items-center justify-center rounded-lg ${
					selectedDishes_morning.some(
                    (selected) => selected.value === dish_morning.value
					)
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                onClick={() => toggleDishSelection_morning(dish_morning)}
				>
                {dish_morning.label}
				</div>
            ))}
			</div>
        </div>
		</Modal>
    </div>
	);
};

export default ModalOpen_morning;
