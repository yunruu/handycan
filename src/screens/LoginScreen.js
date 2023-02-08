import React from "react";
import { Card } from "../components/UI/Card";
import InputField from "../components/Auth/InputField";
import AuthButton from "../components/Auth/AuthButton";
import { StyleSheet, Text } from "react-native";
import Footer from "../components/Auth/Footer";

export default function LoginScreen({ navigation }) {
  const accessRegister = () => navigation.navigate("Register");
  const accessDashboard = () => navigation.navigate("Dashboard");

  return (
    <Card styles={styles.container}>
      <InputField placeholder={"Email"} />
      <InputField placeholder={"Password"} />
      <AuthButton title={"Login"} onPress={() => accessDashboard()} />
      <Footer
        text={"Don't have an account yet? Sign up"}
        onPress={() => accessRegister()}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
});
