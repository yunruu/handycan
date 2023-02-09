import React from "react";
import { View, Pressable, Text } from "react-native";
import { BUTTONS, TEXTS } from "../../style/Styles";

export default function PinkButton(props, { onPress, textField }) {
    return (
      <View>
        <Pressable style={ BUTTONS.primaryPink }
            onPress={ props.onPress }>
              <Text style={ TEXTS.colorButtonText }>
                { props.textField }
              </Text>
        </Pressable>
        { props.children }
      </View>
    )
}