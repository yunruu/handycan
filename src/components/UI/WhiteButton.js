import React from "react";

import { View, Pressable, Text } from "react-native";
import { BUTTONS, TEXTS } from "../../style/Styles";

export default function WhiteButton({ onPress, textField }) {
  return (
    <View>
      <Pressable style={BUTTONS.whiteButton} onPress={onPress}>
        <Text style={TEXTS.whiteButtonText}>{textField}</Text>
      </Pressable>
    </View>
  );
}