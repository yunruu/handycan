import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { InputField } from '../components/InputField'
import { Card } from '../components/Card'

const Login = () => {
    return (
        <Card>
            <InputField placeholder={"Email"}/>
            <InputField placeholder={"Password"}/>
        </Card>
    )
}

export default Login