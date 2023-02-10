import { View, Text, Image, Pressable, Alert } from 'react-native';
import React, { Component, useState } from "react";
import { LOGOS, STYLES, TEXTS } from '../style/Styles';
import InputTextbox from '../components/UI/InputTextbox';
import PinkButton from '../components/UI/PinkButton';
import { handleRegister } from '../services/authServices';


function Register({ navigation }) {
    const accessLogin = () => navigation.navigate("Login");
    const accessDashboard = () => navigation.navigate("Dashboard");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    return (
        <View style={[STYLES.containerWhite, {paddingTop: 30 }]}>
            <Image 
                style={LOGOS.mediumLogo}
                source={require("../../assets/handycan-logo.png")}></Image>
            <InputTextbox placeholder={"Name"}
                            onChangeText={username => setUsername(username)} />
            <InputTextbox placeholder={"Email"}
                            onChangeText={email => setEmail(email)} />
            <InputTextbox placeholder={"Password"} 
                            secureTextEntry={true}
                            onChangeText={password => setPassword(password)} />
            <PinkButton 
                onPress={async () => {
                    setLoading(true);
                    try {
                        await handleRegister(username, email, password, setLoading);
                        //Route to dashboard
                        accessDashboard();
                    } catch (err) {
                        Alert.alert('Registration failed.');
                        setLoading(false);
                        return;
                    }
                }}
                disabled={isLoading}
                textField={"Register"}/>
            <View style={[STYLES.transparentContainerHor, { paddingTop: 30 } ]}>
                <Text style={[TEXTS.caption, {fontStyle: 'italic'}]}>
                    Already have an account?
                </Text>
                <Pressable onPress={() => accessLogin()} 
                    style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 5}}>
                    <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
};

export default Register