import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = ({ mainData, navigation }) => {
  const currentFavs = useSelector((state) => state.favorites.favorites);

  const renderMealItem = ({
    item: { id, title, complexity, affordability, imageUrl, duration },
  }) => {
    const isFavorite = currentFavs.some((fav) => fav.id === id);
    return (
      <MealItem
        title={title}
        complexity={complexity}
        affordability={affordability}
        imageUrl={imageUrl}
        duration={duration}
        onSelect={() => {
          navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: id,
              mealTitle: title,
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={mainData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 13,
    backgroundColor: "white",
  },
});

export default MealList;
