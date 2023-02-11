import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { STYLES, TEXTS, BUTTONS } from '../style/Styles'
import WhiteBottomSheet from '../components/UI/WhiteBottomSheet'
import { COLORS } from '../style/Colors'
import ReturnButton from '../components/UI/ReturnButton'
import PageHeader from '../components/UI/PageHeader'

const round2dp = (val) => {
    return val.toFixed(1);
}
  
const filterTypes = ["Audio", "Mobility", "Visual", "Mental", "Other"];

function Nearby({navigation, route}) {
    const {placeName, placeId, lat, long} = route.params;
    const [searchRes, setSearchRes] = React.useState([]);

    console.log("lat: " + lat + ", long: " + long);

    const handleLocationPress = (newName, newId, newLat, newLong) => {
        setPid(pid);
        navigation.navigate("ResultScreen", {
            placeName: newName, 
            placeId: newId, 
            lat: newLat, 
            long: newLong});
    }

    return (
        <View style={STYLES.containerBlue}>
        <ReturnButton onPress={() => navigation.navigate("ResultScreen", {
            placeName: placeName, 
            placeId: placeId, 
            lat: lat, 
            long: long})} style={BUTTONS.returnButton} />
        <PageHeader header={"Nearby Locations"} />
        <WhiteBottomSheet>
            <ScrollView style={{paddingTop: 20}}>
            {
                searchRes == [] 
                ? <View/>
                : searchRes.map(elem => {
                    return(
                    <Pressable key={elem.placeId} style={styles.listItems} onPress={() => handleLocationPress(elem.name, elem.placeId, elem.lat, elem.long)}>
                        <Text style={TEXTS.body22}>{elem.name} </Text>
                        <Text>Rating: {round2dp(elem.locationScore)}</Text>
                    </Pressable>
                    )
                })
            }
            </ScrollView>
        </WhiteBottomSheet>
        </View>
    )
}

export default Nearby

const styles = StyleSheet.create({
    dropdownContainer: {
      borderRadius: 30,
      backgroundColor: COLORS.white,
      borderColor: COLORS.dark_gray_01,
      borderWidth: 2,
      width: 115,
      height: 26,
    },
    dropdownMenu: {
      borderRadius: 10,
      backgroundColor: COLORS.white,
      borderColor: COLORS.dark_gray_01,
    },
    listItems: {
        paddingHorizontal: 10,
        height: 65,
        justifyContent: 'center',
    }
});
