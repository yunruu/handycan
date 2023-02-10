import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../style/Colors";

const Rating = ({ rating, numberOfReviews }) => {
  // Get hands component representing rating
  let hands = [];

  for (var i = 0; i < 5; i++) {
    if (i < rating) {
      hands.push(
        <MaterialCommunityIcons
          key={i}
          name="hand-heart"
          size={20}
          color={COLORS.pink}
        />
      );
    } else {
      hands.push(
        <MaterialCommunityIcons
          key={i}
          name="hand-heart-outline"
          size={20}
          color={COLORS.light_gray_03}
        />
      );
    }
  }
  return (
    <View style={styles.container}>
      <Text>Accessibility: </Text>
      {hands}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Rating;
