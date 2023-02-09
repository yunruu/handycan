import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { styles } from '../style/Styles';

// const auth = getAuth();

function Login() {
    return (
        <View style={styles.text_container_1}>
            <Text>Login</Text>
        </View>
    )
}
  
export default Login;