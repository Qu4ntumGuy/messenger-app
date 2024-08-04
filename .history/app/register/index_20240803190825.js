import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input, Text } from "react-native-elements";
import { useRouter } from "expo-router";
import { auth } from "../../firebase";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            image ||
            "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png",
        });
      })
      .catch((error) => alert(error.message));
  };

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
  inputContainer: {
    width: 350,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
