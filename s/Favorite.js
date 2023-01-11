import React from "react";
import { Appbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView
} from "react-native";
const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "REACT NATIVE LATEST UPDATE",
      about: " With the release of 0.71, React Native is investing in the TypeScript experience with the following changes: ",
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
const Favorite = ({ navigation }) => {
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
        export default Favorite;
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: "##dff2ff",
            justifyContent: "flex-start",
            alignItems: "center",
          },
          InputText: {
            backgroundColor: "white",
        
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
            marginBottom: 5,
            width: 200,
            height: 40,
          },
          InputTextDes: {
            backgroundColor: "white",
        
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 5,
            marginBottom: 20,
            width: 200,
            height: 200,
          },
          Button: {
            width: "100%",
            padding: 15,
            borderRadius: 10,
            marginTop: 5,
            alignItems: "center",
          },
          ButtonText: {
            color: "white",
            fontWeight: "700",
            fontSize: 16,
          },
          ButtonOutlineText: {
            color: "#0782F9",
            fontWeight: "700",
            fontSize: 16,
          },
          Bottom: {
            color: "#0782F9",
            backgroundColor: "#0782F9",
            width: 400,
            height: 50,
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
        