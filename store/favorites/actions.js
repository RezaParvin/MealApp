import actions from "./actionTypes";

export const toggleFav = (mealItem) => ({
  type: actions.TOGGLE_FAVE,
  payload: mealItem,
});
