import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_morning } from "../actions/updateSelectedDishes";
import { useTodos } from "../../FireBase/TodosProvider"; //Context API
import { motion } from "framer-motion";

const ModalOpen_morning = ({ Menu, closeModalFn }) => {
  const dispatch = useDispatch();
  const { todos } = useTodos();
  const selectedDishes_morning = useSelector(
    (state) => state.selectedDishes_morning
  );

  const removeDishSelection_morning = (dish) => {
    const updatedSelection = selectedDishes_morning.filter(
      selected => selected.value !== dish.value
    );
    dispatch(updateSelectedDishes_morning(updatedSelection));
  }

  const toggleDishSelection_morning = (dish_morning) => {
    const isSelected = selectedDishes_morning.some(
      (selected) => selected.value === dish_morning.value
    );
  
    if (isSelected) {
      removeDishSelection_morning(dish_morning);
    } else {
      dispatch(
        updateSelectedDishes_morning([...selectedDishes_morning, dish_morning])
      );
    }
  };

  return (
    <div className="App">
      <Modal
        className="flex flex-col mx-auto my-8 h-4/5 w-11/12 bg-white bg-opacity-100 border-solid overflow-y-scroll"
        isOpen={true}
        onRequestClose={closeModalFn}
        shouldCloseOnOverlayClick={true}
      >
        {/* selected_dishesのみを表示する部分 */}
        <div className="flex flex-wrap h-1/2 justify-center mb-4 rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
            {selectedDishes_morning.map((selectedDish) => (
               <div 
                  key={selectedDish.id} 
                  className="px-4 h-10 m-2 flex items-center justify-center rounded-full bg-amber-300"
                  onClick={() => removeDishSelection_morning(selectedDish)}  // ここで選択解除の関数を呼ぶ
               >
                  {selectedDish.name}
              </div>
          ))}
        </div>

        {/* dish_morningを選択する部分 */}
        <div className="flex flex-wrap h-1/2 justify-center rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
          {todos.map((dish_morning) => {
            if (selectedDishes_morning.some(selected => selected.value === dish_morning.value)) {
              return null;  // 既に選択されている場合は何も表示しない
            }
            return (
              <div
                key={dish_morning.id}
                className="px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full"
                onClick={() => toggleDishSelection_morning(dish_morning)}
              >
                {dish_morning.name}
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default ModalOpen_morning;
