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
  className="flex mx-auto my-20 h-5/6 w-3/4 bg-white bg-opacity-100 rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll"
  isOpen={true}
  onRequestClose={closeModalFn}
  shouldCloseOnOverlayClick={true}
>
  <div className="flex flex-wrap justify-center">
    {options.map((dish_dinner) => (
      <div
        key={dish_dinner.value}
        className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
          selectedDishes_lunch.some(
            (selected) => selected.value === dish_dinner.value
          )
            ? 'bg-amber-300 transition-all duration-500 ease-out'
            : ''
        }`}
        onClick={() => toggleDishSelection_lunch(dish_dinner)}
        style={{
          backgroundColor: selectedDishes_lunch.some(
            (selected) => selected.value === dish_dinner.value
          )
            ? '#FDE68A'
            : '',
        }}
      >
        {dish_dinner.label}
      </div>
    ))}
  </div>
</Modal>
    </div>
	);
};

export default ModalOpen_lunch;
