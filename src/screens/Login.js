import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { logos, styles, text } from "../style/Styles";
import InputTextbox from "../components/UI/InputTextbox";
import PinkButton from "../components/UI/PinkButton";

function Login({ navigation }) {
  const accessRegister = () => navigation.navigate("Register");
  const accessDashboard = () => navigation.navigate("Dashboard");

  return (
    <View style={[styles.containerWhite, { paddingTop: 80 }]}>
      <Image
        style={logos.mediumLogo}
        source={require("../../assets/handycan-logo.png")}
      ></Image>
      <InputTextbox placeholder={"Email"} />
      <InputTextbox placeholder={"Password"} secureTextEntry={true} />
      <PinkButton onPress={() => accessDashboard()} textField={"Login"} />
      <View style={[styles.transparentContainerHor, { paddingTop: 80 }]}>
        <Text style={[TEXT.caption, { fontStyle: "italic" }]}>
          Don’t have an account?
        </Text>
        <Pressable
          onPress={() => accessRegister()}
          style={{ flexDirection: "row", alignItems: "center", paddingLeft: 5 }}
        >
          <Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Sign up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Login;
