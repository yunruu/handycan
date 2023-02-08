import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import colours from "../../styles/colours";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__unclicked}>
        <TextInput placeholder={"Search"} styles={styles.searchInput} />
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
    backgroundColor: colours.pink,
    width: 30,
    height: 30,
    borderRadius: 99,
  },
});
