import React from "react";
import { Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList.jsx";
import { useSelector } from "react-redux";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("cId");
  const currentMeals = useSelector(
    (state) => state.filteredMeals.filteredMeals
  );

  const filterMeals = currentMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList mainData={filterMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const category = CATEGORIES.find((c) => c.id === navigation.getParam("cId"));
  return {
    headerTitle: () => (
      <Text style={{ fontFamily: "iran-sans", fontSize: 20, color: "white" }}>
        {category.title}
      </Text>
    ),
  };
};

export default CategoryMealScreen;
