import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input } from "react-native-elements";

export default function RegisterScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <Text h3 style={{ marginBottom: 50 }}>
        Create an account
      </Text>
      <View style={styles.inputContainer}>
        <Input placeholder="Full Name" autoFocus />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
