import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Login Screen</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input placeholder="Password" secureTextEntry value={password} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
