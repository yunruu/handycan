import React from "react";
import { TextInput, View } from "react-native";
import { STYLES, TEXTS } from "../../style/Styles";

export default function InputTextbox(props, { placeholder, onChangeText, secureTextEntry }) {
  return (
    <View style={STYLES.textContainer1}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={TEXTS.caption16}
        secureTextEntry={props.secureTextEntry}
      />
      {props.children}
    </View>
  );
}
