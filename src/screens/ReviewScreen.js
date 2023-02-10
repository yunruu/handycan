import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Rating from "../components/Review/Rating";
import Review from "../components/Review/Review";
import { Card } from "../components/UI/Card";
import PinkButton from "../components/UI/PinkButton";
import { COLORS } from "../style/Colors";
import { STYLES } from "../style/Styles";

const ReviewScreen = ({ locationName }) => {
  // TODO
  const getTotalRating = () => {
    return 3.0;
  };

  // TODO
  const getTotalReviews = () => {
    return 187;
  };

  const ReviewHeader = () => {
    return (
      <View style={styles.reviewHeaderContainer}>
        <View style={styles.reviewDetailsContainer}>
          <View style={styles.fullRating}>
            <Rating rating={getTotalRating()} />
            <Text>({getTotalRating().toFixed(1)})</Text>
          </View>
          <Text>{getTotalReviews()} reviews</Text>
        </View>
        <PinkButton textField={"Post"} />
      </View>
    );
  };

  return (
    <View style={STYLES.containerPink}>
      <View style={styles.reviewsContainer}>
        <Text style={styles.restaurantName}>{locationName}</Text>
        <ReviewHeader />
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
  fullRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 30,
  },
  reviewHeaderContainer: {
    alignSelf: "flex-start",
    alignItems: "center",
    marginLeft: 30,
    marginBottom: 10,
    flexDirection: "row",
  },
  reviewsContainer: {
    flex: 0.9,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    marginTop: "auto",
    alignItems: "center",
  },
});

export default ReviewScreen;
