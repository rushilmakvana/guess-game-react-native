import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructiontext, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructiontext: {
    fontFamily: "Alata_400Regular",
    color: colors.accent500,
    fontSize: 25,
    // fontWeight: "bold",
  },
});
