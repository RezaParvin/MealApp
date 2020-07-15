import { MEALS } from "../../data/dummy-data";
import actions from "./actionType";

const initailState = {
  filteredMeals: MEALS,
};

const setFilter = (state, setting) => {
  const newFilteredMeals = MEALS.filter((meal) => {
    if (!meal.isVegan && setting.isVegan) return false;
    if (!meal.isVegetarian && setting.isVegetarian) return false;
    if (!meal.isGlutenFree && setting.isGlutenFree) return false;
    if (!meal.isLactoseFree && setting.isLactoseFree) return false;
    return true;
  });
  return { ...state, filteredMeals: newFilteredMeals };
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actions.SET_FILTERS:
      return setFilter(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
