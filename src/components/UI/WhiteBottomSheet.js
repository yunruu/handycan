import { View, Text } from 'react-native'
import React from 'react'
import { STYLES } from '../../style/Styles'

function WhiteBottomSheet( {children, top, alignItems, justifyContent, height} ) {
  return (
    <View style={[STYLES.whiteBottomSheet, {
        top: top || 82, 
        alignItems: alignItems, 
        justifyContent: justifyContent,
        height: height || "90%"}]}>
        {children}
    </View>
  )
}

export default WhiteBottomSheet