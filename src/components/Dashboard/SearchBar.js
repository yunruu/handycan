import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { COLORS } from "../../style/Colors";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.container}>
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
