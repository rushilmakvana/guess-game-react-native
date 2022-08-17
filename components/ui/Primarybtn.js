import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Primarybtn = ({ children, onPress }) => {
  return (
    <View style={styles.btnoutercontainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.btninnercontainer, styles.press]
            : styles.btninnercontainer
        }
        android_ripple={{ color: colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.btntext}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Primarybtn;

const styles = StyleSheet.create({
  btnoutercontainer: {
    margin: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  btninnercontainer: {
    padding: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.primary500,
    elevation: 4,
  },
  btntext: {
    textAlign: "center",
    color: "white",
    fontFamily: "Alata_400Regular",
  },
  press: {
    opacity: 0.75,
  },
});
