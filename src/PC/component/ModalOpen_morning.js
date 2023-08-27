import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_morning } from "../actions/updateSelectedDishes";
import { useTodos } from "../../FireBase/TodosProvider"; //Context API

const ModalOpen_morning = ({ Menu, closeModalFn }) => {
  const dispatch = useDispatch();
  const { todos } = useTodos();
  const selectedDishes_morning = useSelector(
    (state) => state.selectedDishes_morning
  );

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
      dispatch(
        updateSelectedDishes_morning([...selectedDishes_morning, dish_morning])
      );
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
          {todos.map((dish_morning) => (
            <div
              key={dish_morning.id}
              className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
                selectedDishes_morning.some(
                  (selected) => selected.value === dish_morning.value
                )
                  ? "bg-amber-300 transition-all duration-500 ease-out"
                  : ""
              }`}
              onClick={() => toggleDishSelection_morning(dish_morning)}
              style={{
                backgroundColor: selectedDishes_morning.some(
                  (selected) => selected.value === dish_morning.value
                )
                  ? "#FDE68A"
                  : "",
              }}
            >
              {dish_morning.name}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalOpen_morning;
