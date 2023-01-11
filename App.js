import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./s/Login";
import Home from "./s/Home";
import Add from "./s/Add";
import Reservation from "./s/Reservation";
import Register from "./s/Register";
import Favorite from "./s/Favorite";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "home" }}
        />
        <Stack.Screen name="Add" component={Add} options={{ title: "Add" }} />
        <Stack.Screen
          name="Reservation"
          component={Reservation}
          options={{ title: "Reservation" }}
        />
        <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{ title: "Favorite" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
