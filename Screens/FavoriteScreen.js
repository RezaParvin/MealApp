import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";

const FavoriteScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.favorites.favorites);

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <DefaultText style={styles.text}>
          هیچ غذایی در لیست علاقه مندی وجود ندارد
        </DefaultText>
      </View>
    );
  }

  return <MealList mainData={favoriteMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
  },
});

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
