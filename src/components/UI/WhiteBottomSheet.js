import { View, Text } from 'react-native'
import React from 'react'
import { STYLES } from '../../style/Styles'

function WhiteBottomSheet( {children, alignItems, justifyContent, height} ) {
  return (
    <View style={[STYLES.whiteBottomSheet, {
        alignItems: alignItems, 
        justifyContent: justifyContent,
        height: height || "85%"}]}>
        {children}
    </View>
  )
}

export default WhiteBottomSheet