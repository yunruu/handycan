import React from "react";
import { Image, View } from "react-native";

const LocationBox = ({ uri, title }) => {
  return (
    <View>
      <Image style={styles.tinyLogo} source={{ uri: { uri } }} />
      <Text>{text}</Text>
    </View>
  );
};

export default LocationBox;
