const selectedDishesReducer_dinner = (state , action) => {
  if (typeof state ==="undefined"){
      return []
  }

  switch (action.type) {
    case 'Dinner':
      return action.payload;
    default:
      return state;
  }
};

export default selectedDishesReducer_dinner;
