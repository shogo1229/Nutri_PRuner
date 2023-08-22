import Modal from "react-modal";
import options from "./FoodList";
import { useDispatch } from "react-redux";

const ModalOpen = ({closeModalFn, selectedDishes, updateFn }) => {
  const dispatch = useDispatch();
  const updateSelectedDishes = updateFn;

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
        <div className="flex flex-wrap justify-center">
          {options.map((dish) => (
            <div
              key={dish.value}
              className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
                selectedDishes.some((selected) => selected.value === dish.value)
                  ? "bg-amber-300 transition-all duration-500 ease-out"
                  : ""
              }`}
              onClick={() => toggleDishSelection(dish)}
            >
              {dish.label}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalOpen;
