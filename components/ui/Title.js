import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Alata_400Regular",
    marginTop: 25,
    padding: 12,
    fontSize: 25,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
  },
});
