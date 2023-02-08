import { View, Text } from 'react-native'
import React from 'react'

const Register = () => {
    return (
        <Card>
            <InputField placeholder={"Name"}/>
            <InputField placeholder={"Email"}/>
            <InputField placeholder={"Password"}/>
            <InputField placeholder={"Type of Disability"}/>
        </Card>
    )
}

export default Register