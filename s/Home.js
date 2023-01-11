import { StatusBar } from "expo-status-bar";
import React from "react";
import { Appbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "REACT NATIVE LATEST UPDATE",
    about: " With the release of 0.71, React Native is investing in the TypeScript experience with the following changes: ",
    img: require("../assets/image2.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "REACT NATIVE LATEST UPDATE",
    about: " Today we are sharing an experimental cross-platform pointer API for React Native. ",
    img: require("../assets/image2.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "REACT NATIVE LATEST UPDATE",
    about: " released on January 3, 2023 ",
    img: require("../assets/image2.png"),
  },
];

const Item = ({ title, about, img }) => (
  <SafeAreaView>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.imageStyle} source={img} />
    <Text>{about}</Text>
  </SafeAreaView>
);
const renderItem = ({ item }) => (
  <Item
    style={styles.item}
    title={item.title}
    about={item.about}
    img={item.img}
  />
);
const Home = ({ navigation }) => {
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
            paddingHorizontal = "100px";
          }}
        />
        <Appbar.Action
          icon="heart"
          onPress={() => {
            navigation.navigate("Favorite");
            paddingHorizontal = "100px";
          }}
        />
        <Appbar.Action
          icon="archive"
          onPress={() => {
            navigation.navigate("Add");
            paddingHorizontal = "100px";
          }}
        />
        <Appbar.Action
          icon="logout"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </Appbar>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff2ff",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  body: {
    width: "50%",
  },
  title: {
    fontSize: 22,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  imageStyle: {
    fontSize: 5,
    width: 200,
    height: 200,
    resizeMode: "stretch",
    marginBottom: 10,
    marginTop: 20,
  },
  flatList: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    width: "100%",
    height: "100%",
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
    color: "#336699",
  },

  buttonOutlineText: {
    color: "#0782F9",
  },
  Bottom: {
    color: "#0782F9",
    backgroundColor: "#0782F9",
    width: "100%",
  },
  box: {},
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
  },
});
