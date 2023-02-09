import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'column'
    },

    text_container_1: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
})

const buttons = StyleSheet.create({
    primary: {
        flex: 1,
        height: 50,
        backgroundColor: COLORS.white
    },
})