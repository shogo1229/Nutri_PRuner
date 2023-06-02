export const updateSelectedDishes_morning = (dishes) => {
    return {
      type: 'Morning',
      payload: dishes
    };
  };

export const updateSelectedDishes_lunch = (dishes) => {
    return {
      type: 'Lunch',
      payload: dishes
    };
  };

export const updateSelectedDishes_dinner = (dishes) => {
    return {
      type: 'Dinner',
      payload: dishes
    };
  };

export const updateSelectedDishes_snack = (dishes) => {
    return {
      type: 'Snack',
      payload: dishes
    };
  };

