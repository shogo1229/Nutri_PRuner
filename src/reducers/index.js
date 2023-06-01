// reducers/index.js
import { combineReducers } from 'redux';
import selectedDishesReducer_morning from './selectedDishes_morning';
import selectedDishesReducer_lunch from './selectedDishes_lunch';
import selectedDishesReducer_dinner from './selectedDishes_dinner';
import selectedDishesReducer_snack from './selectedDishes_snack';

const rootReducer = combineReducers({
  selectedDishes_morning: selectedDishesReducer_morning,
  selectedDishes_lunch: selectedDishesReducer_lunch,
  selectedDishes_dinner: selectedDishesReducer_dinner,
  selectedDishes_snack: selectedDishesReducer_snack
});

export default rootReducer;
