import { combineReducers } from "redux";
import mealsReducer from "./meals/reducer";
import favReducer from "./favorites/reducer";
import filteredReducer from "./filtered/reducer";

export const rootReducer = combineReducers({
  meals: mealsReducer,
  favorites: favReducer,
  filteredMeals: filteredReducer,
});
