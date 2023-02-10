import React from "react";
import { View, Pressable, Text } from "react-native";
import { BUTTONS, TEXTS } from "../../style/Styles";

export default function PinkButton({ onPress, textField }) {
  return (
    <View>
      <Pressable style={BUTTONS.primaryPink} onPress={onPress}>
        <Text style={TEXTS.colorButtonText}>{textField}</Text>
      </Pressable>
    </View>
  );
}
