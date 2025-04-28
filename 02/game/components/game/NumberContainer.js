import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    color: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 480 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
