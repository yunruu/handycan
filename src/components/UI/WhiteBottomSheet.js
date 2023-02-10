import { View, Text } from 'react-native'
import React from 'react'
import { STYLES } from '../../style/Styles'

function WhiteBottomSheet( {children, top, alignItems, justifyContent} ) {
  return (
    <View style={[STYLES.whiteBottomSheet, {top: top || 82}]}>
        {children}
    </View>
  )
}

export default WhiteBottomSheet