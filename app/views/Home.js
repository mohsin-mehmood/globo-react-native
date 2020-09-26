import React from "react";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Menu from "../sections/Menu";

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
});

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header message="Press to Login" />
      <Hero />
      <Menu navigation={navigation} />
    </View>
  );
}
