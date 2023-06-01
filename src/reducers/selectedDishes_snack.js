const selectedDishesReducer_snack = (state , action) => {
  if (typeof state ==="undefined"){
      return []
  }

  switch (action.type) {
    case 'Snack':
      return action.payload;
    default:
      return state;
  }
};

export default selectedDishesReducer_snack;
