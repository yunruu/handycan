import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { COLORS } from "../../style/Colors";
import { STYLES } from "../../style/Styles";

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={STYLES.textContainer1}>
      <View style={styles.searchBar__unclicked}>
        <TextInput
          placeholder={"Search"}
          styles={styles.searchInput}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar__unclicked: {
    flexDirection: "row",
    width: "95%",
    borderRadius: 15,
    alignItems: "center",
  },
});
