const selectedDishesReducer_morning = (state , action) => {
  if (typeof state ==="undefined"){
      return []
  }

  switch (action.type) {
    case 'Morning':
      return action.payload;
    default:
      return state;
  }
};

export default selectedDishesReducer_morning;
