import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LOGOS } from '../../style/Styles';
import { useState } from 'react';

const RatingBar = ({ onPress }) => {
    const [rating, setRating] = useState(0);
    const [maxRating, setMaxRating] = useState([1,2,3,4,5]);

    return (
        <View style={styles.container}>
        {
            maxRating.map((item, key) => {
                return(
                    <TouchableOpacity 
                        activeOpacity={0.7} 
                        key={item} 
                        onPress={() => { setRating(item); }}>
                            <Image source={item <= rating
                                        ? require("../../../assets/star-filled.png")
                                        : require("../../../assets/star-empty.png")} 
                                        style={[LOGOS.microLogo, {marginLeft: 2}]} />
                    </TouchableOpacity>
                )
            })
        }
        </View>
    )
}

export default RatingBar

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
    }
});