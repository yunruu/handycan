import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { LOGOS, STYLES, TEXTS } from '../style/Styles';
import InputTextbox from '../components/UI/InputTextbox';
import PinkButton from '../components/UI/PinkButton';

function Login({ navigation }) {
    const accessRegister = () => navigation.navigate("Register");
    const accessDashboard = () => navigation.navigate("Dashboard");

    return (
        <View style={[STYLES.containerWhite, {paddingTop: 80 }]}>
            <Image 
                style={LOGOS.mediumLogo}
                source={require("../../assets/handycan-logo.png")} />
            <InputTextbox placeholder={"Email"} />
            <InputTextbox placeholder={"Password"} secureTextEntry={true}/>
            <PinkButton onPress={() => accessDashboard()} textField={"Login"} />
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