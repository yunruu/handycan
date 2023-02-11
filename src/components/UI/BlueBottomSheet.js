import { View, Text } from 'react-native'
import React from 'react'
import { STYLES } from '../../style/Styles'

function BlueBottomSheet( {children, alignItems, justifyContent} ) {
  return (
    <View style={[STYLES.blueBottomSheet, {
        alignItems: alignItems || 'center', 
        justifyContent: justifyContent,
        }]}>
        {children}
    </View>
  )
}

export default BlueBottomSheet