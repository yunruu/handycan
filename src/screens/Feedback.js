import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import ReturnButton from '../components/UI/ReturnButton'
import { BUTTONS, STYLES, TEXTS } from '../style/Styles'
import WhiteBottomSheet from '../components/UI/WhiteBottomSheet'
import PageHeader from '../components/UI/PageHeader'
import RatingBar from '../components/UI/RatingBar'

function Feedback(props, { navigation, restaurant }) {

    return (
        <View style={STYLES.containerPink}>
            <ReturnButton onPress={() => navigation.navigate("Dashboard")} style={BUTTONS.returnButton} />
            <PageHeader header={"Feedback"} />
            <WhiteBottomSheet>
                {/* To pass in restaurant name from feedback page caller */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={TEXTS.subHeaderBlack}>Random Burger Place</Text>
                    <View style={STYLES.transparentContainerHor}>
                        <Text style={[TEXTS.caption, {paddingRight: 5}]}>
                            Accessibility Rating:
                        </Text>
                        <RatingBar />
                    </View>
                </View>
            </WhiteBottomSheet>
        </View>
    )
}

export default Feedback