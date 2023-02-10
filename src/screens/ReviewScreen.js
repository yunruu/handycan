import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Review from "../components/Review/Review";
import { Card } from "../components/UI/Card";
import { COLORS } from "../style/Colors";
import { STYLES } from "../style/Styles";

const ReviewScreen = ({ locationName }) => {
  return (
    <View style={STYLES.containerPink}>
      <View style={styles.reviewsContainer}>
        <View style={styles.reviewHeaderContainer}>
          <Text>{locationName}</Text>
        </View>
        <Review
          username={"johntan"}
          timestamp={"07/02/2023 8:43pm"}
          rating={3}
          goodpt={
            "Lots of ramp and staff is very friendly to wheelchair users!"
          }
          aoi={"Wide alleys and good food too!"}
          suggestions={"Definitely recommend"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewHeaderContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  reviewsContainer: {
    flex: 0.85,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
  },
});

export default ReviewScreen;
