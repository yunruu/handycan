import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function UserStack(props) {
  return <NavigationContainer>{props.children}</NavigationContainer>;
}
