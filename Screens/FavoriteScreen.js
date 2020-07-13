import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoriteScreen = ({ navigation }) => {
  const targetData = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList mainData={targetData} navigation={navigation} />;
};
const headerTitleStyle = {
  fontFamily: "iran-sans",
  fontSize: 24,
  color: "white",
};

FavoriteScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: () => <Text style={headerTitleStyle}>انواع غذاها</Text>,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoriteScreen;
