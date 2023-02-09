import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Alert } from 'react-native';
import { buttons, logos, styles, text } from '../style/Styles';
import Register from './Register';

// const auth = getAuth();

function Login({ navigation }) {
    const accessRegister = () => navigation.navigate("Register");

    return (
        <View style={[styles.containerWhite, {paddingTop: 60 }]}>
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
            <View style={[styles.transparentContainerHor, { paddingTop: 80 } ]}>
                <Text style={[text.caption, {fontStyle: 'italic'}]}>
                    Don’t have an account?
                </Text>
                <Pressable onPress={() => accessRegister()} 
                    style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 5}}>
                    <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Sign up</Text>
                </Pressable>
            </View>
        </View>
    )
}
  
export default Login;