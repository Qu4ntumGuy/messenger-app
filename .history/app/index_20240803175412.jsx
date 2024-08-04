import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  return (
    <View style={styles.screen}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {},
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
});
