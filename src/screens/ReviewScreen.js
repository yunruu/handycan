import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Rating from "../components/Review/Rating";
import Review from "../components/Review/Review";
import PinkButton from "../components/UI/PinkButton";
import { COLORS } from "../style/Colors";
import { BUTTONS, STYLES } from "../style/Styles";
import { getReviewList } from "../services/reviewServices";
import { filterBy } from "../utils/FilterBy";
import { getLocation } from "../services/LocationServices";
import ReturnButton from "../components/UI/ReturnButton";
import PageHeader from "../components/UI/PageHeader";

const ReviewScreen = ({ navigation, route }) => {
  // TODO: Tidy up backend
  const {placeName, placeId, lat, long} = route.params;
  const [reviewsData, setReviewsData] = useState([]);
  const [totalRating, setTotalRating] = useState(0);
  const [reviewNum, setReviewNum] = useState(0);

  console.log(placeName + placeId + lat + long);

  useEffect(() => {
    async function getReviewsList() {
      const res = await getReviewList(placeId.toString(), null);
      setReviewsData(res);
    }
    
    getReviewsList();
  }, []);

  useEffect(() => {
    async function getTotalRating() {
      const res = await getLocation(placeId);
      const rating = res.locationScore.toFixed(1);
      setTotalRating(rating);
    }
    
    getTotalRating();
  }, []);

  useEffect(() => {
    async function getTotalReviews() {
      const res = await getLocation(placeId);
      const num = res.reviewNumber;
      setReviewNum(num);
    }
    
    getTotalReviews();
  }, []);

  console.log("Reviews data: " + reviewsData); 

  const ReviewHeader = () => {
    return (
      <View style={styles.reviewHeaderContainer}>
        <View style={styles.reviewDetailsContainer}>
          <View style={styles.fullRating}>
            <Rating rating={totalRating} />
            <Text> {totalRating}</Text>
          </View>
          <Text>{reviewNum} reviews</Text>
        </View>
        <PinkButton textField={"Post"} />
      </View>
    );
  };

  const renderItem = ( {item} ) => {
    return (
      <Review
        username={item.username}
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
      <ReturnButton onPress={() => navigation.navigate("ResultScreen", {placeName: placeName, placeId: placeId, lat: lat, long: long})} style={BUTTONS.returnButton} />
      <PageHeader header="Reviews" />
      <View style={styles.reviewsContainer}>
        <Text style={styles.restaurantName}>{placeName}</Text>
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
  reviewDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default ReviewScreen;
