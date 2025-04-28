import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [roundsNumber, setRoundsNumber] = useState(0);
  const [isGameOver, setIsGameOver] = useState(true);

  const [isFontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setIsGameOver(true);
    setRoundsNumber(numberOfRounds);
  };

  const restartHandler = () => {
    setUserNumber(null);
    setRoundsNumber(0);
  };

  if (isFontsLoaded) {
    SplashScreen.hide();
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        onRestart={restartHandler}
      />
    );
  }

  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={roundsNumber}
        userNumber={userNumber}
        onRestart={restartHandler}
      />
    );
  }

  return (
    <>
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary800, Colors.accent500]}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
