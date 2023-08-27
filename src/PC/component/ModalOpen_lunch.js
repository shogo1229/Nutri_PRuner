import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_lunch } from "../actions/updateSelectedDishes";
import { useTodos } from "../../FireBase/TodosProvider"; //Context API

const ModalOpen_lunch = ({ Menu, closeModalFn }) => {
  const dispatch = useDispatch();
  const { todos } = useTodos();
  const selectedDishes_lunch = useSelector(
    (state) => state.selectedDishes_lunch
  );

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
      dispatch(
        updateSelectedDishes_lunch([...selectedDishes_lunch, dish_lunch])
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
          {todos.map((dish_lunch) => (
            <div
              key={dish_lunch.id}
              className={`px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full ${
                selectedDishes_lunch.some(
                  (selected) => selected.value === dish_lunch.value
                )
                  ? "bg-amber-300 transition-all duration-500 ease-out"
                  : ""
              }`}
              onClick={() => toggleDishSelection_lunch(dish_lunch)}
              style={{
                backgroundColor: selectedDishes_lunch.some(
                  (selected) => selected.value === dish_lunch.value
                )
                  ? "#FDE68A"
                  : "",
              }}
            >
              {dish_lunch.name}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalOpen_lunch;
