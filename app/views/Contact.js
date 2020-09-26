import React, { useState } from "react";
import Header from "../sections/Header";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableHighlight,
} from "react-native";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "25%",
  },
  heading: {
    fontSize: 16,
    flex: 1,
  },
  inputs: {
    flex: 1,
    width: "80%",
    padding: 10,
  },
  multiInput: {
    flex: 2,
    width: "90%",
    paddingTop: 20,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
};

export default function Contact({ navigation }) {
  const [contactDetail, setContactDetail] = useState({
    msg: "Enter Message",
    name: "Enter Name",
    email: "Enter your Email Address",
  });

  const sendMessage = () => {
    Alert.alert(contactDetail.name, contactDetail.msg);
    navigation.goBack();
  };

  const clearFields = () => {
    setContactDetail({
      msg: "",
      name: "",
      email: "",
    });
  };

  return (
    <View style={styles.container}>
      <Header navigate={navigation.navigate} message="Press to Login" />
      <Text style={styles.heading}>Contact Us</Text>

      <TextInput
        style={styles.inputs}
        onChangeText={(text) =>
          setContactDetail({ ...contactDetail, name: text })
        }
        value={contactDetail.name}
      />

      <TextInput
        style={styles.multiInput}
        onChangeText={(text) =>
          setContactDetail({ ...contactDetail, msg: text })
        }
        value={contactDetail.msg}
        multiline={true}
        numberOfLines={4}
      />

      <TextInput
        style={styles.inputs}
        onChangeText={(text) =>
          setContactDetail({ ...contactDetail, email: text })
        }
        value={contactDetail.email}
      />

      <TouchableHighlight onPress={sendMessage} underlayColor="#31e981">
        <Text style={styles.buttons}>Send Message</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={clearFields} underlayColor="#31e981">
        <Text style={styles.buttons}>Reset Form</Text>
      </TouchableHighlight>
    </View>
  );
}
