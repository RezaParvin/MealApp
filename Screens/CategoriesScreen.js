import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../Constants/Colors";
import CategoryGridItem from "../components/CategoryGridItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridItem
        color={item.color}
        title={item.title}
        onSelect={() => {
          navigation.navigate({
            routeName: "CategoryMeal",
            params: {
              cId: item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const headerTitleStyle = {
  fontFamily: "iran-sans",
  fontSize: 24,
  color: "white",
};

CategoriesScreen.navigationOptions = ({ navigation }) => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textHeader: {
    fontFamily: "iran-sans",
    fontSize: 20,
  },
});

export default CategoriesScreen;
