import React from "react";
import { StyleSheet, View } from "react-native";

export function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
