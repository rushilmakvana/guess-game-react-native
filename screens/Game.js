import {
  Alert,
  StyleSheet,
  View,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import Numcontainer from "../components/game/Numcontainer";
import Primarybtn from "../components/ui/Primarybtn";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import colors from "../constants/colors";
import GuessList from "../components/game/GuessList";
function generateNum(min, max, exclude) {
  const rndnum = Math.floor(Math.random() * (max - min)) + min;

  if (rndnum == exclude) {
    return generateNum(min, max, exclude);
  }
  return rndnum;
}

let lower = 1;
let upper = 100;

const Game = ({ userguess, gameover }) => {
  const { width } = useWindowDimensions();
  const initialnum = generateNum(1, 100, userguess);
  const [currentnum, setCurrentnum] = useState(initialnum);
  const [guessrounds, setGuessrounds] = useState([initialnum]);
  useEffect(() => {
    if (currentnum == userguess) {
      gameover(guessrounds.length);
    }
  }, [currentnum, userguess, gameover]);
  useEffect(() => {
    lower = 1;
    upper = 100;
  }, []);

  function nextguesshandler(direction) {
    if (
      (direction === "lower" && currentnum < userguess) ||
      (direction === "greater" && currentnum > userguess)
    ) {
      Alert.alert("Invalid Guess", "Guess Right number", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
      console.log("wrong");
      return;
    }

    if (direction === "lower") {
      upper = currentnum;
    } else {
      lower = currentnum + 1;
    }
    const newnum = generateNum(lower, upper, currentnum);
    setCurrentnum(newnum);
    setGuessrounds((guess) => [newnum, ...guess]);
    // setguess();x
  }
  let content = (
    <>
      <Numcontainer>{currentnum}</Numcontainer>
      <Card>
        <InstructionText style={styles.instruction}>
          Higher or Lower
        </InstructionText>
        <View style={styles.btncontainer}>
          <View style={styles.btn}>
            <Primarybtn onPress={nextguesshandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={colors.accent500} />
            </Primarybtn>
          </View>
          <View style={styles.btn}>
            <Primarybtn onPress={nextguesshandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={colors.accent500} />
            </Primarybtn>
            {/* <Text>Higher or Lower</Text> */}
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.newContainer}>
          <View style={styles.btn}>
            <Primarybtn onPress={nextguesshandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={colors.accent500} />
            </Primarybtn>
          </View>
          <Numcontainer>{currentnum}</Numcontainer>
          <View style={styles.btn}>
            <Primarybtn onPress={nextguesshandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={colors.accent500} />
            </Primarybtn>
            {/* <Text>Higher or Lower</Text> */}
          </View>
        </View>
      </>
    );
  }
  const length = guessrounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.gamecontainer}>
        <FlatList
          data={guessrounds}
          renderItem={(dataitem) => {
            return (
              <GuessList
                roundnum={length - dataitem.index}
                guessnum={dataitem.item}
              />
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  btncontainer: {
    flexDirection: "row",
    width: "100%",
  },
  btn: {
    flex: 1,
  },
  instruction: {
    marginBottom: 12,
  },
  gamecontainer: {
    flex: 1,
    padding: 16,
  },
  newContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
