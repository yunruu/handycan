import { View, Text, Image, Pressable, Alert } from 'react-native';
import React from 'react';
import { LOGOS, STYLES, TEXTS } from '../style/Styles';
import InputTextbox from '../components/UI/InputTextbox';
import PinkButton from '../components/UI/PinkButton';


function Register({ navigation }) {
    const accessLogin = () => navigation.navigate("Login");
  
    return (
        <View style={[STYLES.containerWhite, {paddingTop: 30 }]}>
            <Image 
                style={LOGOS.mediumLogo}
                source={require("../../assets/handycan-logo.png")}></Image>
            <InputTextbox placeholder={"Name"} />
            <InputTextbox placeholder={"Email"} />
            <InputTextbox placeholder={"Password"} secureTextEntry={true}/>
            <PinkButton 
                onPress={() => Alert.alert("Register button pressed")}
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