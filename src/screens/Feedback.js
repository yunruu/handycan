import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import ReturnButton from '../components/UI/ReturnButton'
import { BUTTONS, LOGOS, STYLES, TEXTS } from '../style/Styles'
import WhiteBottomSheet from '../components/UI/WhiteBottomSheet'
import PageHeader from '../components/UI/PageHeader'

function Feedback(props, { navigation, restaurant }) {
    const [defaultRating, setDefautlRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

    return (
        <View style={STYLES.containerPink}>
            <ReturnButton onPress={() => navigation.navigate("Dashboard")} style={BUTTONS.returnButton} />
            <PageHeader header={"Feedback"} />
            <WhiteBottomSheet>
                {/* To pass in restaurant name from feedback page caller */}
                {/* <Text>{restaurant}</Text> */}
                <View>
                    <Text style={TEXTS.subHeaderBlack}>Random Burger Place</Text>
                    <View style={[STYLES.transparentContainerHor, {paddingTop: 5} ]}>
                        <Text style={[TEXTS.caption, {paddingRight: 5}]}>
                            Accessibility Rating:
                        </Text>
                        <Image source={require("../../assets/star-empty.png")} 
                                style={LOGOS.microLogo} />
                    </View>
                </View>
            </WhiteBottomSheet>
        </View>
    )
}

export default Feedback