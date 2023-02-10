import { View, Text } from 'react-native'
import React from 'react'
import { STYLES } from '../../style/Styles'

function WhiteBottomSheet( {children} ) {
  return (
    <View style={STYLES.whiteBottomSheet}>
        {children}
    </View>
  )
}

export default WhiteBottomSheet