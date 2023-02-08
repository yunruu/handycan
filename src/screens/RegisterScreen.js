import { View, Text } from "react-native";
import React from "react";
import { Card } from "../components/UI/Card";
import InputField from "../components/Auth/InputField";
import Footer from "../components/Auth/Footer";
import AuthButton from "../components/Auth/AuthButton";

const Register = ({ navigation }) => {
  const accessLogin = () => navigation.navigate("Login");
  const accessDashboard = () => navigation.navigate("Dashboard");
  return (
    <Card>
      <InputField placeholder={"Name"} />
      <InputField placeholder={"Email"} />
      <InputField placeholder={"Password"} />
      <InputField placeholder={"Type of Disability"} />
      <Footer
        text={"Already have an account? Login here"}
        onPress={accessLogin}
      />
      <AuthButton title={"Register"} onPress={() => accessDashboard()} />
    </Card>
  );
};

export default Register;
