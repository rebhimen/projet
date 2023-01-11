import React from "react";
import { Appbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  label,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
const Reservation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar style={styles.Bottom} color="#0782F9">
        <Appbar.Action
          icon="home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Appbar.Action
          icon="plus"
          onPress={() => {
            navigation.navigate("Add");
          }}
        />
        <Appbar.Action
          icon="logout"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </Appbar>
    </View>
  );
};
export default Reservation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3cdec",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  InputText: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  Button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  Bottom: {
    color: "#0782F9",
    backgroundColor: "#0782F9",
    width: "300",
    height: "50",
    
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    //backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});
