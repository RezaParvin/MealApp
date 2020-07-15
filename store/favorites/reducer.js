import { MEALS } from "../../data/dummy-data";
import actions from "./actionTypes";

const initailState = {
  favorites: [],
};

const toggleFave = (state, mealItem) => {
  if (state.favorites.length !== 0) {
    const findMeal = state.favorites.findIndex((fav) => fav.id === mealItem.id);
    if (findMeal >= 0) {
      const newFavs = state.favorites.filter((meal) => meal.id !== mealItem.id);
      return { ...state, favorites: newFavs };
    } else {
      return { ...state, favorites: state.favorites.concat(mealItem) };
    }
  } else {
    return { ...state, favorites: [mealItem] };
  }
};
const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actions.TOGGLE_FAVE:
      return toggleFave(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
