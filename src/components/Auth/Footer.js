import { Text, TouchableOpacity } from "react-native";

export default function Footer({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
