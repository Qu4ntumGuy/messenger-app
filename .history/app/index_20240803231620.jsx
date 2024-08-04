import { useNavigation, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        navigation("home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {};

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
      <Button containerStyle={styles.button} title="Login" onPress={signIn} />
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
