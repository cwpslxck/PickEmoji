import { Image, StyleSheet } from "react-native";
import React from "react";

export default function ImageViewer({ pl, selectedImg }) {
  const imageSource = selectedImg ? { uri: selectedImg } : pl;

  return <Image source={imageSource} style={styles.img} />;
}

const styles = StyleSheet.create({
  img: {
    width: 270,
    height: 480,
    borderRadius: 18,
  },
});
