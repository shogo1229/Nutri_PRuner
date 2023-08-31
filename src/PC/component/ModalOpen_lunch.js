import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_lunch } from "../actions/updateSelectedDishes";
import { useTodos } from "../../FireBase/TodosProvider"; //Context API
import crossmark from "../img/crossmark.png";
import checkmark from "../img/checkmark.png";

const ModalOpen_lunch = ({ Menu, closeModalFn }) => {
  const dispatch = useDispatch();
  const { todos } = useTodos();
  const selectedDishes_lunch = useSelector(
    (state) => state.selectedDishes_lunch
  );
  const removeDishSelection_lunch = (dish) => {
    const updatedSelection = selectedDishes_lunch.filter(
      selected => selected.value !== dish.value
    );
    dispatch(updateSelectedDishes_lunch(updatedSelection));
  }

  const toggleDishSelection_lunch = (dish_lunch) => {
    const isSelected = selectedDishes_lunch.some(
      (selected) => selected.value === dish_lunch.value
    );

    if (isSelected) {
      removeDishSelection_lunch(dish_lunch);
    } else {
      dispatch(
        updateSelectedDishes_lunch([...selectedDishes_lunch, dish_lunch])
      );
    }
  };

  return (
    <div className="App">
      <Modal
        className="flex flex-row mx-auto my-8 h-4/5 w-11/12 bg-white bg-opacity-100 border-solid overflow-y-scroll"
        isOpen={true}
        onRequestClose={closeModalFn}
        shouldCloseOnOverlayClick={true}
      >
        {/* dish_lunchを選択する部分 */}
        <div className="flex flex-wrap w-1/2 justify-center rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
          {todos.map((dish_lunch) => {
            if (selectedDishes_lunch.some(selected => selected.value === dish_lunch.value)) {
              return null;  // 既に選択されている場合は何も表示しない
            }
            return (
                <button
                  key={dish_lunch.id}
                  onClick={() => toggleDishSelection_lunch(dish_lunch)}
                >
                  <div className="px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full">
                  <img src={checkmark} alt="check" />
                  {dish_lunch.name}
                  </div>
                </button>
              
            );
            })}
        </div>
        {/* selected_dishesのみを表示する部分 */}
        <div className="flex flex-wrap w-1/2 justify-center mx-4 rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
            {selectedDishes_lunch.map((selectedDish) => (
               <button 
                  key={selectedDish.id} 
                  onClick={() => removeDishSelection_lunch(selectedDish)}  // ここで選択解除の関数を呼ぶ
               >
                <div className="px-4 h-10 m-2 flex items-center justify-center rounded-full bg-amber-300">
                  <img src={crossmark} alt="cross" />
                  {selectedDish.name}
                </div>
              </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalOpen_lunch;
