import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridItem = ({ title, color, onSelect }) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.grid}>
      <TouchableComponent style={styles.gridItem} onPress={onSelect}>
        <View
          style={{ ...styles.gridContainer, ...{ backgroundColor: color } }}
        >
          <Text style={styles.gridItemTitle} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 15,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 5,
  },
  gridItem: {
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.26,
    shadowRadius: 9,
    borderRadius: 15,
  },
  gridItemTitle: {
    fontFamily: "iran-sans-bold",
    fontSize: 22,
    textAlign: "left",
  },
});

export default CategoryGridItem;
