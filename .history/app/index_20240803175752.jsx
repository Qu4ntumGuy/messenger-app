import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      {/* <Text>Login Screen</Text> */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChange={(text) => setPassword(text)}
        />
      </View>
      <Button title="Login" onPress={signIn} />
      <Button title="Register" type="outline" />
      {/* <View style={{ height: 100 }} /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {},
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    // paddingTop: 100,
    backgroundColor: "#fff",
  },
});
