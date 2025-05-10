import React from "react";
import { View, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
