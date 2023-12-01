import React from 'react';
import { View, Text, Button } from 'react-native';
import AppNavigator from './src/appNavigator';

const App = ({ navigation }) => {
  return (
    <View>
      <Text>HomePage</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")}></Button>
      <Button title="SignUp" onPress={() => navigation.navigate("SignUp")}></Button>
    </View>
  );
};

export default App;
