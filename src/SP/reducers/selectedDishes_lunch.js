const selectedDishesReducer_lunch = (state , action) => {
  if (typeof state ==="undefined"){
      return []
  }

  switch (action.type) {
    case 'Lunch':
      return action.payload;
    default:
      return state;
  }
};

export default selectedDishesReducer_lunch;
