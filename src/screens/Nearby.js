import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { STYLES, TEXTS } from '../style/Styles'
import WhiteBottomSheet from '../components/UI/WhiteBottomSheet'
import { COLORS } from '../style/Colors'

const round2dp = (val) => {
    return val.toFixed(1);
}
  
const filterTypes = ["Audio", "Mobility", "Visual", "Mental", "Other"];

function Nearby({navigation, route}) {
    const {lat, lng} = route.params;
    const [searchRes, setSearchRes] = React.useState([]);
    const [pid, setPid] = useState(-1);

    const handleLocationPress = (pid) => {
        setPid(pid);
        navigation.navigate("Feedback");
    }

    return (
        <View style={STYLES.containerBlue}>
        <WhiteBottomSheet top={200} height={"70%"}>
            <ScrollView style={{paddingTop: 20}}>
            {
                searchRes == [] 
                ? <View/>
                : searchRes.map(elem => {
                    return(
                    <Pressable key={elem.placeId} style={styles.listItems} onPress={() => handleLocationPress(elem.placeId)}>
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
