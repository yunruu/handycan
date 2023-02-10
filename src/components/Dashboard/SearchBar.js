import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { COLORS } from "../../style/Colors";
import { STYLES } from "../../style/Styles";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={[STYLES.textContainer1, styles.position]}>
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
  position: {
    flexDirection: "row",
    position: "absolute",
    top: 20,
    right: 5,
    paddingBottom: 15,
    width: 310,
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
