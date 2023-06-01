const selectedDishesReducer_morning = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_SELECTED_DISHES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default selectedDishesReducer_morning;