import React from "react";
import { TextInput, View } from "react-native";
import { styles, text } from "../../style/Styles";

export default function InputTextbox(props, { placeholder, onChangeText, secureTextEntry }) {
  return (
    <View style={styles.textContainer1}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={text.caption16}
        secureTextEntry={props.secureTextEntry}
      />
      {props.children}
    </View>
  );
}
