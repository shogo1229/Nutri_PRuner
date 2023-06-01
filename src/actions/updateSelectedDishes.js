export const updateSelectedDishes = (dishes) => {
    return {
      type: 'UPDATE_SELECTED_DISHES',
      payload: dishes
    };
  };