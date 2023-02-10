import { Pressable, View, Image } from "react-native";
import React from 'react'
import { LOGOS } from "../../style/Styles";

function SearchTool(props, { onPress, style }) {
  return (
    <View style={props.style}>
        <Pressable onPress={() => props.onPress()}>
            <Image style={LOGOS.microLogo}
                source={require("../../../assets/search-tool.png")} />
        </Pressable>
    </View>
  )
}

export default SearchTool