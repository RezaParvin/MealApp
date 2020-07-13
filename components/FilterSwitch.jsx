import React from "react";
import { View, Switch, Text, StyleSheet, Platform } from "react-native";
import Colors from "../Constants/Colors";
import DefaultText from "./DefaultText";

const FilterSwitch = ({ title, onChange, dataFilter }) => {
  return (
    <View style={styles.filterContainer}>
      <Switch
        value={dataFilter}
        trackColor={{ true: Colors.PrimaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.PrimaryColor : ""}
        onValueChange={onChange}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:15
  },
  title:{
      fontFamily:'iran-sans',
      fontSize:22
  }
});

export default FilterSwitch;
