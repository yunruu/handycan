import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image, Alert } from 'react-native';
import { buttons, logos, styles, text } from '../style/Styles';
import Register from './Register';
import InputTextbox from '../components/UI/InputTextbox';
import PinkButton from '../components/UI/PinkButton';

// const auth = getAuth();

function Login({ navigation }) {
    const accessRegister = () => navigation.navigate("Register");
    const accessDashboard = () => navigation.navigate("Dashboard");

    return (
        <View style={[styles.containerWhite, {paddingTop: 80 }]}>
            <Image 
                style={logos.mediumLogo}
                source={require("../../assets/handycan-logo.png")}></Image>
            <InputTextbox placeholder={"Email"} />
            <InputTextbox placeholder={"Password"} secureTextEntry={true}/>
            <PinkButton onPress={() => accessDashboard()} textField={"Login"} />
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