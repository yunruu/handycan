import React from "react";
import { Text } from "react-native";
import BottomSheet from "../components/Dashboard/BottomSheet";
import SearchBar from "../components/Dashboard/SearchBar";
import { Card } from "../components/UI/Card";

const SearchPage = ({ locationName }) => {
  // TODO
  const onChangeLocation = () => {};
  return (
    <Card>
      <SearchBar value={locationName} onChangeText={onChangeLocation} />
      <BottomSheet>
        <Text>{locationName}</Text>
      </BottomSheet>
    </Card>
  );
};

export default SearchPage;
