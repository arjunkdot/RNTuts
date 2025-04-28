import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = Number.parseInt(enteredNumber);

    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => {
            setEnteredNumber("");
          },
        },
      ]);
    }

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My number</Title>
          <Card>
            <InstructionText>Enter a number between 1 and 99</InstructionText>
            <TextInput
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.numberInput}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
