import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Input, Text } from "react-native-elements";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const register = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          value={image}
          onChangeText={(text) => setImage(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Register"
        raised
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {},
  button: {
    width: 200,
    marginTop: 10,
  },
});
