import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Alert } from 'react-native';
import { buttons, logos, styles, text } from '../style/Styles';
import { COLORS } from '../style/Colors';

// const auth = getAuth();

function Login() {
    return (
        <View style={styles.containerWhite}>
            <Image 
                style={logos.mediumLogo}
                source={require("../../assets/handycan-logo.png")}></Image>
            <View style={styles.textContainer1}>
                <Text style={text.placeholder16}>
                    Email
                </Text>
            </View>
            <View style={styles.textContainer1}>
                <Text style={text.placeholder16}>
                    Password
                </Text>
            </View>
                <Pressable style={buttons.primaryPink}
                    onPress={() => Alert.alert('Login pressed')}>
                        <Text style={text.colorButtonText}>Login</Text>
                </Pressable>
        </View>
    )
}
  
export default Login;