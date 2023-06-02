import Modal from "react-modal";
import options from './FoodList';
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_snack } from "./actions/updateSelectedDishes";

const ModalOpen_snack = ({ Menu, closeModalFn }) => {
	const dispatch = useDispatch();
	const selectedDishes_snack = useSelector((state) => state.selectedDishes_snack);

	const toggleDishSelection_snack = (dish_snack) => {
    const isSelected = selectedDishes_snack.some(
		(selected) => selected.value === dish_snack.value
    );

    if (isSelected) {
      const updatedSelection_snack = selectedDishes_snack.filter(
        (selected) => selected.value !== dish_snack.value
      );
      dispatch(updateSelectedDishes_snack(updatedSelection_snack));
    } else {
      dispatch(updateSelectedDishes_snack([...selectedDishes_snack, dish_snack]));
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
            {options.map((dish_snack) => (
				<div
                key={dish_snack.value}
                className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
					selectedDishes_snack.some(
                    (selected) => selected.value === dish_snack.value
					)
                    ? 'bg-amber-300 transition-all duration-500 ease-out'
                    : ""
                }`}
                onClick={() => toggleDishSelection_snack(dish_snack)}
				>
                {dish_snack.label}
				</div>
            ))}
			</div>
        </div>
		</Modal>
    </div>
	);
};

export default ModalOpen_snack;
