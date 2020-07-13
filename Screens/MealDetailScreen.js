import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/DefaultListItem";

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const currentMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: currentMeal.imageUrl }} style={styles.img} />
      <View style={styles.detail}>
        <DefaultText>{currentMeal.duration}m</DefaultText>
        <DefaultText>{currentMeal.affordability}</DefaultText>
        <DefaultText>{currentMeal.complexity}</DefaultText>
      </View>
      <Text style={styles.title}>مواد لازم</Text>
      {currentMeal.ingredients.map((ing) => (
        <ListItem item={ing} />
      ))}
      <Text style={styles.title}>طرز تهیه</Text>
      {currentMeal.steps.map((step) => (
        <ListItem item={step} />
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const currentMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: () => (
      <Text
        style={{
          fontFamily: "iran-sans",
          fontSize: 18,
          color: "white",
        }}
      >
        {currentMeal.title}
      </Text>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("you selected this Meal as Favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
  },
  title: {
    fontFamily: "iran-sans-bold",
    fontSize: 25,
    textAlign:'center',
    marginVertical:10
  },
});
export default MealDetailScreen;
