import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ mainData, navigation }) => {
  const renderMealItem = ({
    item: { id, title, complexity, affordability, imageUrl, duration },
  }) => {
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
            params: { mealId: id },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={mainData}
        keyExtractor={(item) => item.id}
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
