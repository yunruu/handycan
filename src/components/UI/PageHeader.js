import { View, Text } from 'react-native'
import React from 'react'
import { STYLES, TEXTS } from '../../style/Styles'

function PageHeader(props, { header }) {
  return (
    <View style={STYLES.pageHeader}>
      <Text style={TEXTS.headerWhite}>{props.header}</Text>
    </View>
  )
}

export default PageHeader