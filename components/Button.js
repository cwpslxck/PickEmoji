import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

import { FontAwesome } from "@expo/vector-icons";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View style={[styles.bCon, { borderRadius: 42 }]}>
        <Pressable
          style={[styles.butt, { backgroundColor: "#cc5f88" }]}
          onPress={onPress}
        >
          <FontAwesome name="cloud-upload" size={36} color="#000" />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.bCon}>
      <Pressable style={styles.butt} onPress={onPress}>
        <Text style={styles.bText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bCon: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#000",
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  butt: {
    borderRadius: 42,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
