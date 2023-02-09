import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import colours from "../../styles/colours";
import { Card } from "../UI/Card";

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
    backgroundColor: colours.white,
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
