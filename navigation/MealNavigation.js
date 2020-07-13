import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import { Platform } from "react-native";
import Colors from "../Constants/Colors";
import { Text } from "react-native";
import FavoriteScreen from "../Screens/FavoriteScreen";
import FilterScreen from "../Screens/FilterScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavOptios = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.PrimaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.PrimaryColor,
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeal: {
      screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptios
);

const favStackNavigator = createStackNavigator(
  {
    Favorite: {
      screen: FavoriteScreen,
      navigationOptions: {
        headerTitle: () => (
          <Text
            style={{ fontFamily: "iran-sans", fontSize: 22, color: "white" }}
          >
            علاقه مندی ها
          </Text>
        ),
        headerBackTitleStyle: {
          fontFamily: "iran-sans-bold",
        },
      },
    },
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptios
);

const FilterStackNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  defaultStackNavOptios
);

const TabNavigatorConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "iran-sans-bold" }}>غذاها</Text>
        ) : (
          "غذاها"
        ),
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.PrimaryColor,
    },
  },
  Favorites: {
    screen: favStackNavigator,
    navigationOptions: {
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "iran-sans-bold" }}>علاقه مندی ها</Text>
        ) : (
          "علاقه مندی ها"
        ),
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.acccentColor,
    },
  },
};

const MealFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(TabNavigatorConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          fontFamily: "iran-sans-bold",
          fontSize: 16,
          backgroundColor: Colors.PrimaryColor,
        },
      })
    : createBottomTabNavigator(TabNavigatorConfig, {
        tabBarOptions: {
          activeTintColor: Colors.acccentColor,
          labelStyle: {
            fontFamily: "iran-sans-bold",
            fontSize: 16,
          },
        },
      });

const mainNavigator = createDrawerNavigator(
  {
    MealFav: {
      screen: MealFavTabNavigator,
      navigationOptions: {
        drawerLabel:
          Platform.OS === "android" ? (
            <Text
              style={{
                color: Colors.acccentColor,
                fontFamily: "iran-sans-bold",
                fontSize:20,
                padding: 10,
              }}
            >
              صفحه اصلی
            </Text>
          ) : (
            "صفحه اصلی"
          ),
      },
    },
    Filters: {
      screen: FilterStackNavigator,
      navigationOptions: {
        drawerLabel:
          Platform.OS === "android" ? (
            <Text style={{ fontFamily: "iran-sans-bold" ,padding:10,fontSize:20}}>فیلتر کردن</Text>
          ) : (
            "فیلتر کردن"
          ),
      },
    },
  },
  {
    drawerPosition: "right",
    contentOptions: {
      activeTintColor: Colors.acccentColor,
      itemStyle:{
        flexDirection:'row-reverse'
      },
      labelStyle: {
        fontFamily: "iran-sans-bold",
        fontSize:20
      },
    },
  }
);

export default createAppContainer(mainNavigator);
