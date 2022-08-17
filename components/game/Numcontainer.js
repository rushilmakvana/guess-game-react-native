import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const devicewidth = Dimensions.get("window").width;

const Numcontainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numtext}>{children}</Text>
    </View>
  );
};

export default Numcontainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: devicewidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numtext: {
    fontFamily: "Alata_400Regular",
    color: colors.accent500,
    fontSize: devicewidth < 380 ? 27 : 36,
    fontWeight: "bold",
  },
});
