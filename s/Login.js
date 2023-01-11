import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.Logo}>My Blog ..</Text>
        <TextInput
          placeholder="Email"
          //onChangeText={(text) => setEmail(text)}
          //value={email}
          style={styles.InputText}
        />
        <TextInput
          placeholder="password"
          // onChangeText={(text) => setPassword(text)}
          //value={password}
          style={styles.InputText}
          secureTextEntry
        />
        <Button
          title="login"
          colorButton="##0782F9"
          marginTop="5"
          paddingHorizontal="15"
          paddingVertical="15"
          marginBottom="5"
          fontSize="50"
          fontWeight="16"
          //onPress={() => onLoginPress()}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Text style={styles.Text}>
          {" "}
          you don't have an account? register now !
        </Text>
        <Button
          title="register"
          style={styles.Button}
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff2ff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  Logo: {
    color: "white",
    backgroundColor: "#0782F9",
    fontSize: 80,
    justifyContent: "flex-start",
    marginBottom: 90,
    marginTop: 100,
    borderRadius: 20,
  },
  Text: {
    color: "#000",
    fontSize: 10,
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
  },
  InputText: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    width: 200,
    height: 40,
  },
  Button: {
    width: 200,
    height: 40,
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    alignItems: "center",
    colorButton: "#078299",
    paddingVertical: "15",
  },
});
