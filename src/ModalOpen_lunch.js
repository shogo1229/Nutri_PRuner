import Modal from "react-modal";
import React, { useState } from "react";
import options from './FoodList';
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_lunch } from "./actions/updateSelectedDishes";

const ModalOpen_lunch = ({ Menu, closeModalFn }) => {
	const dispatch = useDispatch();
	const selectedDishes_lunch = useSelector((state) => state.selectedDishes_lunch);

	const toggleDishSelection_lunch = (dish_lunch) => {
    const isSelected = selectedDishes_lunch.some(
		(selected) => selected.value === dish_lunch.value
    );

    if (isSelected) {
      const updatedSelection_lunch = selectedDishes_lunch.filter(
        (selected) => selected.value !== dish_lunch.value
      );
      dispatch(updateSelectedDishes_lunch(updatedSelection_lunch));
    } else {
      dispatch(updateSelectedDishes_lunch([...selectedDishes_lunch, dish_lunch]));
    }
  };

	return (
    <div className="App">
		<Modal
        className="flex mx-auto my-20 h-5/6 w-3/4 bg-[#FFFFF] rounded-lg"
        isOpen={true}
        onRequestClose={closeModalFn}
        shouldCloseOnOverlayClick={true}
		>
       
       <div className="flex flex-wrap justify-center">
            {options.map((dish_lunch) => (
				<div
                key={dish_lunch.value}
                className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
					selectedDishes_lunch.some(
                    (selected) => selected.value === dish_lunch.value
					)
                    ? 'bg-amber-300 transition-all duration-500 ease-out'
                    : ""
                }`}
                onClick={() => toggleDishSelection_lunch(dish_lunch)}
                style={{
                  backgroundColor: selectedDishes_lunch.some((selected) => selected.value === dish_lunch.value)
                    ? '#FDE68A'
                    : ''
                }}
				>
                {dish_lunch.label}
				</div>
            ))}
			</div>
		</Modal>
    </div>
	);
};

export default ModalOpen_lunch;
