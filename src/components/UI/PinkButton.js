import React from "react";
import { TextInput, StyleSheet, View, Pressable, Text } from "react-native";
import { buttons, text } from "../../style/Styles";

export default function PinkButton(props, { onPress, textField }) {
    return (
      <View>
        <Pressable style={ buttons.primaryPink }
            onPress={ props.onPress }>
              <Text style={ text.colorButtonText }>
                { props.textField }
              </Text>
        </Pressable>
        { props.children }
      </View>
    )
}