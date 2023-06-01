const selectedDishesReducer = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_SELECTED_DISHES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default selectedDishesReducer;