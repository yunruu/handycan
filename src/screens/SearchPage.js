import React from "react";
import { Text, Image, Pressable, View } from "react-native";
import BottomSheet from "../components/Dashboard/BottomSheet";
import SearchBar from "../components/Dashboard/SearchBar";
import { Card } from "../components/UI/Card";
import { LOGOS } from "../style/Styles";

function SearchPage ({ locationName, navigation }) {
  // TODO
  const onChangeLocation = () => {};
  return (
    <Card>
      <View style={{flexDirection: 'row'}}>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Image style={LOGOS.microLogo}
                source={require("../../assets/profile_icon.png")} />
        </Pressable>
      </View>
      
      <SearchBar value={locationName} sonChangeText={onChangeLocation} />
      <BottomSheet>
        <Text>{locationName}</Text>
      </BottomSheet>
    </Card>
  );
};

export default SearchPage;
