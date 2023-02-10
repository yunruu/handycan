import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../style/Colors";
<<<<<<< HEAD
import { Card } from "../UI/Card";
=======
>>>>>>> origin/master

const LocationBox = ({ uri, text }) => {
  return (
    <View style={styles.container}>
      {/* <Image source={{ uri: { uri } }} /> */}
      <Image
        style={styles.image}
        source={require("../../../assets/icon.png")}
      />
      <View style={styles.locationText}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignItems: "center",
    width: 200,
    height: 150,
    margin: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  locationText: {
    margin: 5,
  },
});

export default LocationBox;
