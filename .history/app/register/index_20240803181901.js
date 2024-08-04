import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RegisterScreen({ navigation }) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.screen}>
      <StatusBar style="light" />
      <Text>RegisterScreen</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
