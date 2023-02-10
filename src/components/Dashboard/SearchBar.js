import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { COLORS } from "../../style/Colors";
<<<<<<< HEAD

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
=======
import { STYLES } from "../../style/Styles";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={[STYLES.textContainer1, styles.position]}>
>>>>>>> origin/master
      <View style={styles.searchBar__unclicked}>
        <TextInput
          placeholder={"Search"}
          styles={styles.searchInput}
          onChangeText={onChangeText}
          value={value}
        />
        <View style={styles.userLogo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    backgroundColor: "#fff",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 15,
    height: 50,
    margin: 20,
    padding: 10,
    flexDirection: "row",
    position: "absolute",
    top: 50,
=======
  position: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 5,
    paddingBottom: 15,
    width: 310,
>>>>>>> origin/master
  },
  searchBar__unclicked: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  userLogo: {
    backgroundColor: COLORS.pink,
    width: 30,
    height: 30,
    borderRadius: 99,
  },
});
