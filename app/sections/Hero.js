import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heroImage: {
    flex: 8,
    width: undefined,
    height: undefined,
  },
});

export default function Hero() {
  return (
    <Image style={styles.heroImage} source={require("./img/laptop2.jpg")} />
  );
}
