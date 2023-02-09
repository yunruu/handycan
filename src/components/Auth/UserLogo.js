import React from "react";
import { Image, StyleSheet } from "react-native";

const UserLogo = () => {
  return (
    <Image
      style={styles.userLogo}
      source={require("../../../assets/handycan-logo.png")}
    />
  );
};

const styles = StyleSheet.create({
  width: 30,
  height: 30,
  borderRadius: 99,
});

export default UserLogo;
