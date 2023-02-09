import React from "react";
import { NavigationContainer } from "@react-navigation/native";

<<<<<<< HEAD
export default function UserStack() {
  return <NavigationContainer></NavigationContainer>;
=======
export default function UserStack(props) {
  return <NavigationContainer>{props.children}</NavigationContainer>;
>>>>>>> origin/master
}
