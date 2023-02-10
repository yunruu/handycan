import React from "react";

import { COLORS } from "../../style/Colors";

export default function AuthButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.authButton} onPress={onPress}>
      <Text style={styles.authText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  authButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blue,
    borderRadius: 15,
    padding: 10,
  },
  authText: {
    color: COLORS.white,
  },
});

