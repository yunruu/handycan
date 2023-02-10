import { View, Text, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { LOGOS } from '../../style/Styles'

function ReturnButton(props, { navigation, onPress, style }) {
  return (
    <View style={props.style}>
      <Pressable onPress={() => props.onPress()}>
        <Image source={require("../../../assets/back-arrow.png")} 
            style={LOGOS.microLogo}/>
      </Pressable>
    </View>
  )
}

export default ReturnButton