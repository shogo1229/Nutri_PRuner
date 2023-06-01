import { combineReducers } from 'redux';
import selectedDishesReducer from './selectedDishes';

const rootReducer = combineReducers({
  selectedDishes: selectedDishesReducer
});

export default rootReducer;