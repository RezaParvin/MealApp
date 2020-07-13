import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./navigation/MealNavigation";
import { enableScreens } from "react-native-screens";

const getFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "iran-sans": require("./assets/fonts/IRANSans-Regular.ttf"),
    "iran-sans-bold": require("./assets/fonts/IRANSans-Bold.ttf"),
  });
};

enableScreens();

export default function App() {
  const [loadData, setLoadData] = useState(false);

  if (!loadData) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setLoadData(true);
        }}
      />
    );
  }
  return <MealNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "iran-sans",
  },
});
