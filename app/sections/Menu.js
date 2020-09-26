import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#35605a",
  },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ffffff",
    borderBottomWidth: 1,
  },
  buttonStyles: {
    backgroundColor: "#35605a",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default function Menu({ navigation }) {
  const onPress = () => {
    Alert.alert("You pressed the button");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
          <Text style={styles.buttonText}>LESSONS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
          <Text style={styles.buttonText}>BLOG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyles}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.buttonText}>CONTACT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
          <Text style={styles.buttonText}>QUIZ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
          <Text style={styles.buttonText}>ABOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
