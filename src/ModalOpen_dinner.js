import Modal from "react-modal";
import options from './FoodList';
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_dinner } from "./actions/updateSelectedDishes";

const ModalOpen_dinner = ({ Menu, closeModalFn }) => {
	const dispatch = useDispatch();
	const selectedDishes_dinner = useSelector((state) => state.selectedDishes_dinner);

	const toggleDishSelection_dinner = (dish_dinner) => {
    const isSelected = selectedDishes_dinner.some(
		(selected) => selected.value === dish_dinner.value
    );

    if (isSelected) {
      const updatedSelection_dinner = selectedDishes_dinner.filter(
        (selected) => selected.value !== dish_dinner.value
      );
      dispatch(updateSelectedDishes_dinner(updatedSelection_dinner));
    } else {
      dispatch(updateSelectedDishes_dinner([...selectedDishes_dinner, dish_dinner]));
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
			<div className="flex flex-wrap justify-center">
            {options.map((dish_dinner) => (
				<div
                key={dish_dinner.value}
                className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
					selectedDishes_dinner.some(
                    (selected) => selected.value === dish_dinner.value
					)
                    ? 'bg-amber-300 transition-all duration-500 ease-out'
                    : ""
                }`}
                onClick={() => toggleDishSelection_dinner(dish_dinner)}
				>
                {dish_dinner.label}
				</div>
            ))}
			</div>
        </div>
		</Modal>
    </div>
	);
};

export default ModalOpen_dinner;
