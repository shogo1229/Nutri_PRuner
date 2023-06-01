// reducers/index.js
import { combineReducers } from 'redux';
import selectedDishesReducer_morning from './selectedDishes_morning';
import selectedDishesReducer_lunch from './selectedDishes_lunch';

const rootReducer = combineReducers({
  selectedDishes_morning: selectedDishesReducer_morning,
  selectedDishes_lunch: selectedDishesReducer_lunch
});

export default rootReducer;
