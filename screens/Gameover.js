import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import Primarybtn from "../components/ui/Primarybtn";

const devicewidth = Dimensions.get("window").width;
const Gameover = ({ guess, usernum, restart }) => {
  const { width, height } = useWindowDimensions();
  let imgsize = 300;
  if (width < 380) {
    imgsize = 150;
  }

  if (height < 550) {
    imgsize = 80;
  }
  const imgstyle = {
    width: imgsize,
    height: imgsize,
    borderRadius: imgsize / 2,
  };
  return (
    <View style={styles.container}>
      <Title>GAME OVER!!</Title>
      <View style={[styles.imgcontainer, imgstyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/sucess.jpg")}
          resizeMode="cover"
        />
      </View>
      <View style={{ marginHorizontal: 17 }}>
        <Text style={styles.summurytext}>
          You needed <Text style={styles.highlighted}>{guess}</Text> turns to
          guess <Text style={styles.highlighted}>{usernum}</Text> number
        </Text>
      </View>
      <Primarybtn onPress={restart}>Start New Game</Primarybtn>
    </View>
  );
};

export default Gameover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgcontainer: {
    // width: devicewidth < 380 ? 150 : 300,
    margin: devicewidth < 380 ? 15 : 24,
    // height: devicewidth < 380 ? 150 : 300,
    // borderRadius: devicewidth < 380 ? 75 : 150,
    overflow: "hidden",
    borderColor: colors.primary800,
    borderWidth: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summurytext: {
    fontSize: 24,
    marginVertical: 16,
    // marginHorizontal: 16,
    textAlign: "center",
  },
  highlighted: {
    fontWeight: "bold",
    color: colors.primary800,
  },
});
