import { Pressable, Text, View, Image } from "react-native";
import React from 'react'
import { LOGOS, STYLES } from "../../style/Styles";

function ProfileIcon(props, { onPress, style }) {
  return (
    <View style={props.style}>
        <Pressable onPress={() => props.onPress()}>
            <Image style={LOGOS.microLogo}
                source={require("../../../assets/profile_icon.png")} />
        </Pressable>
    </View>
  )
}

export default ProfileIcon