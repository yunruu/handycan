import { Text, TouchableOpacity, View } from "react-native";
import { Card } from "../UI/Card";

export default function Footer({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );
}
