import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import login from "./screen/login";
import signup from "./screen/signup";
import { createStackNavigator } from "@react-navigation/stack";
import App from "../App";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="SignUp" component={signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
