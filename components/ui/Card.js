import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const devicewidth = Dimensions.get("window").width;
const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: devicewidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    // elevation: 4,
  },
});
