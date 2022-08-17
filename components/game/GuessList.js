import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const GuessList = ({ roundnum, guessnum }) => {
  return (
    <View style={styles.listitem}>
      <Text style={styles.listtext}>#{roundnum}</Text>
      <Text style={styles.listtext}>Opponent's Guess : {guessnum}</Text>
    </View>
  );
};

export default GuessList;

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.primary800,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  listtext: {
    fontFamily: "Alata_400Regular",
  },
});
