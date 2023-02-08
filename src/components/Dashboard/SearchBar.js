import React from "react";
import { StyleSheet, View } from "react-native";
import colours from "../../styles/colours";
import InputField from "../UI/InputField";

export default function SearchBar() {
  return (
    <InputField placeholder={"Search"}>
      <View style={styles.userLogo} />
    </InputField>
  );
}

const styles = StyleSheet.create({
  userLogo: {
    backgroundColor: colours.pink,
    borderRadius: 99,
  },
});
