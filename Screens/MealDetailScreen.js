import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import ListItem from "../components/DefaultListItem";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/favorites/actions";

const MealDetailScreen = ({ navigation }) => {
  const mealId = navigation.getParam("mealId");
  const currentMeals = useSelector((state) => state.meals.meals);
  const currentFavs = useSelector((state) => state.favorites.favorites);
  const mealInFavs = currentFavs.some((meal) => meal.id === mealId);
  const currentMeal = currentMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(actions.toggleFav(currentMeal));
  }, [dispatch, currentMeal]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: mealInFavs });
  }, [currentFavs]);

  return (
    <ScrollView>
      <Image source={{ uri: currentMeal.imageUrl }} style={styles.img} />
      <View style={styles.detail}>
        <DefaultText>{currentMeal.duration}m</DefaultText>
        <DefaultText>{currentMeal.affordability}</DefaultText>
        <DefaultText>{currentMeal.complexity}</DefaultText>
      </View>
      <Text style={styles.title}>مواد لازم</Text>
      {currentMeal.ingredients.map((ing, index) => (
        <ListItem item={ing} key={index} />
      ))}
      <Text style={styles.title}>طرز تهیه</Text>
      {currentMeal.steps.map((step, index) => (
        <ListItem item={step} key={index} />
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealTitle = navigation.getParam("mealTitle");
  const toggleFav = navigation.getParam("toggleFav");
  const isFav = navigation.getParam("isFav");

  return {
    headerTitle: () => (
      <Text
        style={{
          fontFamily: "iran-sans",
          fontSize: 18,
          color: "white",
        }}
      >
        {mealTitle}
      </Text>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
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
    textAlign: "center",
    marginVertical: 10,
  },
});
export default MealDetailScreen;
