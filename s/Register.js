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
const Register = ({ navigation, Home }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Text style={styles.Logo}>My Blog ..</Text>
        <TextInput
          placeholder="full name"
          style={styles.InputText}
         
        />

        <TextInput
          placeholder="Email"
          style={styles.InputText}
          
        />
        <TextInput
          placeholder="password"
          style={styles.InputText}
          secureTextEntry
        />
        <TextInput
          placeholder="confirm password"
          style={styles.InputText}
          secureTextEntry
        />
        <Button
          title="sign in"
          style={styles.Button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
export default Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dff2ff",
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
    width: 200,
    height: 40,
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
  Button: {
    backgroundColor: "black",
    color: "black",
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
});
