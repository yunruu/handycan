import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colours from "../../styles/colours";

export default function AuthButton({title, onPress}) {
    return <TouchableOpacity style={styles.authButton} onPress={onPress}>
        <Text style={styles.authText}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    authButton : {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colours.purple,
        borderRadius: 15, 
        padding: 10, 
    },
    authText: {
        color: '#fff'
    }
})