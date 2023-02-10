import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { COLORS } from "../../style/Colors";
import { STYLES } from "../../style/Styles";

export default function SearchPageBar({ value, onChangeText }) {
  return (
    <View style={[STYLES.textContainer1, STYLES.searchbar]}>
      <View >
        <TextInput
          placeholder={"Search"}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
}
