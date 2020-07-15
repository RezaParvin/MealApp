import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import { useDispatch } from "react-redux";
import * as actions from "../store/filtered/actions";

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetariane] = useState(false);

  const dispatch = useDispatch();

  const saveAllFilter = useCallback(() => {
    const currentFilter = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVegetarian,
    };
    dispatch(actions.setFilter(currentFilter));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveAllFilter });
  }, [saveAllFilter]);

  return (
    <View style={styles.screen}>
      <Text style={styles.headerTitle}>فیلتر کردن محتوا</Text>
      <FilterSwitch
        title="بدون گلوتن"
        dataFilter={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title="بدون قند"
        dataFilter={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title="گیاهی"
        dataFilter={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title="گیاه خواران"
        dataFilter={isVegetarian}
        onChange={(newValue) => setIsVegetariane(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "iran-sans-bold",
    fontSize: 25,
    marginVertical: 20,
  },
});

FilterScreen.navigationOptions = ({ navigation }) => {
  const headerTitleStyle = {
    fontFamily: "iran-sans",
    fontSize: 24,
    color: "white",
  };

  return {
    headerTitle: () => <Text style={headerTitleStyle}>فیلتر کردن</Text>,
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
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="save"
          iconName="ios-save"
          onPress={navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

export default FilterScreen;
