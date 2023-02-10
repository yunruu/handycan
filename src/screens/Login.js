import React, { Component, useState } from "react";
import { View, Text, Pressable, Image, Alert } from 'react-native';
import { LOGOS, STYLES, TEXTS } from '../style/Styles';
import InputTextbox from '../components/UI/InputTextbox';
import PinkButton from '../components/UI/PinkButton';
import { handleLogin } from '../services/authServices';

function Login({ navigation }) {
    const accessRegister = () => navigation.navigate("Register");
    const accessDashboard = () => navigation.navigate("Dashboard");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);


    return (
        <View style={[STYLES.containerWhite, {paddingTop: 80 }]}>
            <Image 
                style={LOGOS.mediumLogo}
                source={require("../../assets/handycan-logo.png")} />
            <InputTextbox 
                placeholder={"Email"} 
                onChangeText={email => setEmail(email)} />
            <InputTextbox 
                placeholder={"Password"} 
                secureTextEntry={true} 
                onChangeText={password => setPassword(password)} />
            <PinkButton onPress={async () => {
                setLoading(true);
                try {
                    await handleLogin(email, password, setLoading);
                    //Route to dashboard
                    accessDashboard();
                } catch (err) {
                    Alert.alert('Login failed.');
                    setLoading(false);
                    return;
                }
                }}
                disabled={isLoading}
                textField={"Login"} />
            <View style={[STYLES.transparentContainerHor, { paddingTop: 80 } ]}>
                <Text style={[TEXTS.caption, {fontStyle: 'italic'}]}>
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
