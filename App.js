import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useFonts, Alata_400Regular } from "@expo-google-fonts/alata";
import colors from "./constants/colors";
import Game from "./screens/Game";
import Gameover from "./screens/Gameover";
import Startgame from "./screens/Startgame";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [num, setNum] = useState();
  const [gameover, setGameover] = useState(true);
  const [guess, setGuess] = useState(0);
  const [isloaded] = useFonts({
    Alata_400Regular,
  });
  if (!isloaded) {
    return <AppLoading />;
  }
  function handlenum(number) {
    setNum(number);
    setGameover(false);
  }

  function gameoverhandler(num) {
    setGameover(true);
    setGuess(num);
  }
  function startnewgame() {
    setNum(null);
    setGuess(0);
  }
  let screen = <Startgame onpicknumber={handlenum} />;
  if (num) {
    screen = <Game userguess={num} gameover={gameoverhandler} />;
  }
  // function setguess() {
  //   setGuess(guess + 1);
  // }
  if (gameover && num) {
    screen = <Gameover usernum={num} guess={guess} restart={startnewgame} />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.root}
      >
        <ImageBackground
          style={styles.root}
          source={require("./assets/images/dice.jpg")}
          resizeMode="cover"
          imageStyle={styles.img}
        >
          <SafeAreaView style={styles.root}>
            {screen}
            {/* <Gameover /> */}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {
    opacity: 0.15,
  },
});
