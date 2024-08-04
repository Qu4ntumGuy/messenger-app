import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200, marginBottom: 50 }}
      />
      {/* <Text>Login Screen</Text> */}
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        containerStyle={{ width: 200, marginTop: 10 }}
        title="Login"
        onPress={signIn}
      />
      <Button
        containerStyle={styles.button}
        title="Register"
        onPress={() => router.push("register")}
        type="outline"
      />
      {/* <View style={{ height: 100 }} /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: 350,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
