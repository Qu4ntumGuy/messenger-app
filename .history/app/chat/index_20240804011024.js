import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";

export default function ChatScreen() {
  const navigation = useNavigation();
  const router = useRouter();
  console.log();
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
