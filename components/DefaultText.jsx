import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = ({ children, style }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: "iran-sans-bold",
  },
});

export default DefaultText;
