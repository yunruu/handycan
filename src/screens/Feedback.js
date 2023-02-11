import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ReturnButton from '../components/UI/ReturnButton'
import PinkButton from '../components/UI/PinkButton'
import { BUTTONS, STYLES, TEXTS, LOGOS } from '../style/Styles'
import WhiteBottomSheet from '../components/UI/WhiteBottomSheet'
import PageHeader from '../components/UI/PageHeader'
import DropdownMenu from '../components/UI/DropdownMenu'

const disabilityType = ["Audio", "Mobility", "Visual", "Mental", "Other"];
const maxRating = [1,2,3,4,5];

function Feedback({ navigation, route }) {
    const {placeName} = route.params;
    const [rating, setRating] = useState(0);
    const [feedback, onChangeFeedback] = useState("");
    const [disability, setDisability] = useState("");

    const submitFeedback = () => {
        if (feedback == "") {
            Alert.alert("There is no feedback. \n Write one now!")
        } else if (disability == "") {
            Alert.alert("Select a disability type.");
        } else if (rating == 0) {
            Alert.alert("Give an accessibility rating.")
        }
        // pass rating, feedback and disability to firebase on submit
    };

    return (
        <View style={STYLES.containerPink}>
            <ReturnButton onPress={() => navigation.navigate("Dashboard")} style={BUTTONS.returnButton} />
            <PageHeader header={"Feedback"} />
            <WhiteBottomSheet alignItems={"center"} justifyContent={"center"} height={"90%"}>
                {/* To pass in location name from feedback page caller */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={TEXTS.subHeaderBlack}>{placeName}</Text>
                    <View style={STYLES.transparentContainerHor}>
                        <Text style={[TEXTS.caption16, {paddingRight: 5}]}>
                            Accessibility Rating:
                        </Text>
                        
                        <View style={STYLES.ratingBar}>
                            {
                                maxRating.map((item, key) => {
                                    return(
                                        <TouchableOpacity 
                                            activeOpacity={0.7} 
                                            key={item} 
                                            onPress={() => { setRating(item); }}>
                                                <Image source={item <= rating
                                                            ? require("../../assets/star-filled.png")
                                                            : require("../../assets/star-empty.png")} 
                                                            style={[LOGOS.microLogo, {marginLeft: 2}]} />
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>

                    </View>
                    <DropdownMenu 
                        options={disabilityType} 
                        onSelect={(disability) => setDisability(disability)}
                        defaultButtonText={'Type of disability'}/>
                    <View style={STYLES.feedbackContainer}>
                        <TextInput
                            multiline={true}
                            maxLength={400}
                            onChangeText={feedback => onChangeFeedback(feedback)}
                            placeholder={"Leave a feedback"} />
                    </View>
                    <PinkButton textField={"Submit"} onPress={() => submitFeedback()}/>
                </View>
            </WhiteBottomSheet>
        </View>
    )
}

export default Feedback