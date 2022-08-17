import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Primarybtn from "../components/ui/Primarybtn";
import colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const Startgame = ({ onpicknumber }) => {
  // console.log(Platform.O);
  const { width, height } = useWindowDimensions();
  const [enterednum, setEnterednum] = useState("");
  function inputhandler(e) {
    setEnterednum(e);
  }
  function reset() {
    console.log("reset");
    setEnterednum("");
  }
  function handlenumber() {
    const num = parseInt(enterednum);
    if (isNaN(num) || num < 1) {
      Alert.alert("Invalid Number", "Enter number between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: reset },
      ]);
      return;
    }
    onpicknumber(enterednum);
  }

  const marginTopdimension = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.root, { marginTop: marginTopdimension }]}>
          <View style={styles.centerTxt}>
            <Title>Guess The Number</Title>
          </View>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              value={enterednum}
              onChangeText={inputhandler}
            />
            <View style={styles.btncontainer}>
              <View style={styles.btn}>
                <Primarybtn onPress={reset}>Reset</Primarybtn>
              </View>
              <View style={styles.btn}>
                <Primarybtn onPress={handlenumber}>Confirm</Primarybtn>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Startgame;

const styles = StyleSheet.create({
  btncontainer: {
    flexDirection: "row",
    width: "100%",
  },
  screen: {
    flex: 1,
  },

  input: {
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    fontSize: 30,
    // fontWeight: "bold",
    fontFamily: "Alata_400Regular",
    width: 60,
    height: 50,
    textAlign: "center",
    marginVertical: 8,
  },
  btn: {
    flex: 1,
  },
  root: {
    flex: 1,
    // alignItems: "center",
  },
  centerTxt: {
    alignItems: "center",
  },
});
