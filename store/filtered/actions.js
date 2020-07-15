import actions from "./actionType";

export const setFilter = (filterSetting) => ({
  type: actions.SET_FILTERS,
  payload: filterSetting,
});
