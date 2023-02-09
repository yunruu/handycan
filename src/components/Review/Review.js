import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../style/Colors";
import UserLogo from "../Auth/UserLogo";
import { Card } from "../UI/Card";
import Rating from "./Rating";

const Review = ({ username, timestamp, rating, goodpt, aoi, suggestions }) => {
  return (
    <Card>
      <View style={styles.container}>
        <Header username={username} timestamp={timestamp} />
        <Rating rating={rating} />
        <ReviewText goodpt={goodpt} aoi={aoi} suggestions={suggestions} />
      </View>
    </Card>
  );
};

const Header = ({ username, timestamp }) => {
  return (
    <View style={styles.header}>
      <View style={styles.userDetails}>
        <UserLogo />
        <Text>{username}</Text>
      </View>
      <Text>{timestamp}</Text>
    </View>
  );
};

const ReviewText = ({ goodpt, aoi, suggestions }) => {
  return (
    <View style={styles.reviewTextContainer}>
      <Text style={styles.reviewTextTitle}>Liked:</Text>
      <Text>{goodpt + "\n"}</Text>
      <Text style={styles.reviewTextTitle}>Could be better:</Text>
      <Text>{aoi + "\n"}</Text>
      <Text style={styles.reviewTextTitle}>Suggest: </Text>
      <Text>{suggestions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
    padding: 15,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewTextContainer: {
    margin: 5,
  },
  reviewTextTitle: {
    fontWeight: "bold",
  },
});
export default Review;
