import React from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { BUTTONS, TEXT } from "../../style/Styles";

export default function PinkButton({ children, onPress, textField }) {
  return (
    <View>
      <Pressable style={BUTTONS.primaryPink} onPress={onPress}>
        <Text style={TEXT.colorButtonText}>{textField}</Text>
      </Pressable>
      {children}
    </View>
  );
}
