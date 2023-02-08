import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function InputField(props, { placeholder, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={styles.inputField}
      />
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  inputField: {
    flex: 0.8,
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 15,
    height: 50,
    padding: 10,
    margin: 10,
  },
});
