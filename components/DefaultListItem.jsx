import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";

const DefaultListItem = ({ item }) => {
  return (
    <View style={styles.list} key={item}>
      <DefaultText style={styles.text}>{item}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
  },
  text: {
    textAlign: "right",
  },
});

export default DefaultListItem;
