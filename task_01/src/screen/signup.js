import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function signup({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const body = {
        userName: username,
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://bloggler-backend.vercel.app/api/user/signup",
        body
      );

      console.log("Signup successful:", response.data);
      // Save user data to AsyncStorage
      await AsyncStorage.setItem("userData", JSON.stringify(response.data));
      alert("Signup successful!");
    } catch (error) {
      console.log("Error during signup:", error);

      // Check if there's a response and extract the error message
      const errorMessage = error?.response?.data?.message || "Unknown error";
      console.log("Error message:", errorMessage);

      alert(`Error during signup: ${errorMessage}. Please try again.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          signUp();
          navigation.navigate("Login"); // Navigate to the Login screen after successful signup
        }}
      >
        <Text style={styles.buttonText}>Sign UP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
