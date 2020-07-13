import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DefaultText from './DefaultText';

const MealItem = ({
  title,
  affordability,
  complexity,
  duration,
  imageUrl,
  onSelect,
}) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onSelect}>
        <View style={styles.mealContainer}>
          <View style={{ ...styles.mealRow, ...styles.headerRow }}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.backImg}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.detailRow }}>
            <DefaultText>{duration}m</DefaultText>
            <DefaultText>{affordability}</DefaultText>
            <DefaultText>{complexity}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    height: 200,
    backgroundColor: "#f1f1f1",
    marginVertical: 10,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 2,
  },
  mealContainer: {
    width: "100%",
  },
  mealRow: {
    flexDirection: "row",
  },
  headerRow: {
    height: "85%",
  },
  detailRow: {
    height: "15%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  backImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
  },
  title: {
    fontSize: 17,
    fontFamily: "open-sans",
    color: "white",
  },
});

export default MealItem;
