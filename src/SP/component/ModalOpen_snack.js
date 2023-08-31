import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedDishes_snack } from "../actions/updateSelectedDishes";
import { useTodos } from "../../FireBase/TodosProvider"; //Context API
import crossmark from "../img/crossmark.png";
import checkmark from "../img/checkmark.png";

const ModalOpen_snack = ({ Menu, closeModalFn }) => {
  const dispatch = useDispatch();
  const { todos } = useTodos();
  const selectedDishes_snack = useSelector(
    (state) => state.selectedDishes_snack
  );
  const removeDishSelection_snack = (dish) => {
    const updatedSelection = selectedDishes_snack.filter(
      selected => selected.value !== dish.value
    );
    dispatch(updateSelectedDishes_snack(updatedSelection));
  }


  const toggleDishSelection_snack = (dish_snack) => {
    const isSelected = selectedDishes_snack.some(
      (selected) => selected.value === dish_snack.value
    );

    if (isSelected) {
      removeDishSelection_snack(dish_snack);
    } else {
      dispatch(
        updateSelectedDishes_snack([...selectedDishes_snack, dish_snack])
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
            {selectedDishes_snack.map((selectedDish) => (
               <button 
                  key={selectedDish.id} 
                  onClick={() => removeDishSelection_snack(selectedDish)}  // ここで選択解除の関数を呼ぶ
               >
                <div className="px-4 h-10 m-2 flex items-center justify-center rounded-full bg-amber-300">
                  <img src={crossmark} alt="cross" />
                  {selectedDish.name}
                </div>
              </button>
          ))}
        </div>

        {/* dish_snackを選択する部分 */}
        <div className="flex flex-wrap h-1/2 justify-center rounded-xl border-solid border-[#37AB9D] border-8 overflow-y-scroll">
          {todos.map((dish_snack) => {
            if (selectedDishes_snack.some(selected => selected.value === dish_snack.value)) {
              return null;  // 既に選択されている場合は何も表示しない
            }
            return (
                <button
                  key={dish_snack.id}
                  onClick={() => toggleDishSelection_snack(dish_snack)}
                >
                  <div className="px-4 py-2 bg-gray-200 m-2 flex items-center justify-center rounded-full">
                  <img src={checkmark} alt="check" />
                  {dish_snack.name}
                  </div>
                </button>
              
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export default ModalOpen_snack;
