import { View, Text } from 'react-native';
import React, { Component, useState } from "react";
import React from 'react';

const __isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);
    const __doLogin = () => {
        if (!email) {
            setError("Email required *");
            setValid(false);
            return;
        } else if (!password && password.trim() && password.length > 6) {
            setError("Weak password, minimum 5 chars");
            setValid(false);
            return;
        } else if (!__isValidEmail(email)) {
            setError("Invalid Email");
            setValid(false);
            return;
        }
        let signInRequestData = {
            email,
            password
        };

        __doSignIn(email, password);
    };

    const __doSignIn = async (email, password) => {
        try {
            let response = await auth().signInWithEmailAndPassword(email, password);
            if (response && response.user) {
                Alert.alert("Success ✅", "Logged successfully");
            }
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        
    );
}