import React from "react";
import { Image, StyleSheet, View } from "react-native";

const UserLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userLogo}
        source={require("../../../assets/handycan-logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 90,
  },
  userLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default UserLogo;
