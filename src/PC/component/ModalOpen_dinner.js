import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_dinner } from "../actions/updateSelectedDishes";
import { useTodos } from "../../FireBase/TodosProvider"; //Context API
import crossmark from "../img/crossmark.png";
import checkmark from "../img/checkmark.png";

const ModalOpen_dinner = ({ Menu, closeModalFn }) => {
  const dispatch = useDispatch();
  const { todos } = useTodos();
  const selectedDishes_dinner = useSelector(
    (state) => state.selectedDishes_dinner
  );

  const removeDishSelection_dinner = (dish) => {
    const updatedSelection = selectedDishes_dinner.filter(
      selected => selected.value !== dish.value
    );
    dispatch(updateSelectedDishes_dinner(updatedSelection));
  }

  const toggleDishSelection_dinner = (dish_dinner) => {
    const isSelected = selectedDishes_dinner.some(
      (selected) => selected.value === dish_dinner.value
    );

    if (isSelected) {
      removeDishSelection_dinner(dish_dinner);
    } else {
      dispatch(
        updateSelectedDishes_dinner([...selectedDishes_dinner, dish_dinner])
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
        {/* dish_dinnerを選択する部分 */}
        <div className="flex flex-wrap w-1/2 justify-center rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
                  {todos.map((dish_dinner) => {
                    if (selectedDishes_dinner.some(selected => selected.value === dish_dinner.value)) {
                      return null;  // 既に選択されている場合は何も表示しない
                    }
                    return (
                        <button
                          key={dish_dinner.id}
                          onClick={() => toggleDishSelection_dinner(dish_dinner)}
                        >
                          <div className="px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full">
                          <img src={checkmark} alt="check" />
                          {dish_dinner.name}
                          </div>
                        </button>
                      
              );
            })}
        </div>

        {/* selected_dishesのみを表示する部分 */}
        <div className="flex flex-wrap w-1/2 justify-center mx-4 rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
            {selectedDishes_dinner.map((selectedDish) => (
               <button 
                  key={selectedDish.id} 
                  onClick={() => removeDishSelection_dinner(selectedDish)}  // ここで選択解除の関数を呼ぶ
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
export default ModalOpen_dinner;
