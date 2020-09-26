import "react-native-gesture-handler";
import React from "react";
import Home from "./app/views/Home";
import Contact from "./app/views/Contact";

import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const NavStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="Home">
        <NavStack.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }}
        ></NavStack.Screen>
        <NavStack.Screen name="Contact" component={Contact}></NavStack.Screen>
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
