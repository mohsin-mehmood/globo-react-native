import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  headText: {
    textAlign: "right",
    color: "#fff",
    fontSize: 20,
  },
  headStyle: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: "#35605a",
    borderBottomWidth: 2,
    borderColor: "#000",
  },
  logoImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default function Header(props) {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  const toggleLogin = () => {
    setUserLoggedIn((prevValue) => {
      return !prevValue;
    });
  };
  return (
    <View style={styles.headStyle}>
      <Image
        source={require("./img/Globo_logo_REV.png")}
        style={styles.logoImage}
      />
      <Text style={styles.headText} onPress={toggleLogin}>
        {isUserLoggedIn ? "Sample User" : props.message}
      </Text>
    </View>
  );
}
