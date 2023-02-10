import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Rating from "../components/Review/Rating";
import Review from "../components/Review/Review";
import PinkButton from "../components/UI/PinkButton";
import { COLORS } from "../style/Colors";
import { STYLES } from "../style/Styles";
import { db } from "../config/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ReviewScreen = ({ placeId, locationName }) => {
  // TODO: Tidy up backend
  const [reviewsData, setReviewsData] = useState([
    {
      id: "10001111",
      placeId: "100",
      score: 3,
      tag: "Mobility Accessibility",
      text1: "1",
      text2: "2",
      text3: "3",
      timestamp: new Date(),
      uid: 0,
      username: "Tim0",
    },
  ]);

  // Skeleton code
  // const reviewsRef = collection(db, "Reviews");
  // const q = query(reviewsRef, where("placeId", "==", placeId));
  // const getReviews = async () => {
  //   try {
  //     const data = [];
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       data.push({ ...doc.data(), id: doc.id });
  //     });

  //     setReviewsData([...data]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // getReviews();
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

  const renderItem = ({ item }) => {
    return (
      <Review
        username={item.username}
        // timestamp={item.timestamp.toDate().toLocaleTimeString("en-US")}
        timestamp={item.timestamp.toDateString()}
        rating={item.score}
        goodpt={item.text1}
        aoi={item.text2}
        suggestions={item.text3}
      />
    );
  };
  return (
    <View style={STYLES.containerPink}>
      <View style={styles.reviewsContainer}>
        <Text style={styles.restaurantName}>{locationName}</Text>
        <ReviewHeader />
        <FlatList data={reviewsData} renderItem={renderItem}></FlatList>
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
