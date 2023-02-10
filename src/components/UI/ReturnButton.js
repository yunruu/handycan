import { View, Text, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { LOGOS } from '../../style/Styles'

function ReturnButton({ navigation, onPress, style }) {
  return (
    <View style={style}>
      <Pressable onPress={() => onPress()}>
        <Image source={require("../../../assets/back-arrow.png")} 
            style={LOGOS.microLogo}/>
      </Pressable>
    </View>
  )
}

export default ReturnButton