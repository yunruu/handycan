import React from "react";
import Review from "../components/Review/Review";

const ReviewScreen = () => {
  return (
    <Review
      username={"johntan"}
      timestamp={"07/02/2023 8:43pm"}
      rating={3}
      goodpt={"Lots of ramp and staff is very friendly to wheelchair users!"}
      aoi={"Wide alleys and good food too!"}
      suggestions={"Definitely recommend"}
    />
  );
};

export default ReviewScreen;
