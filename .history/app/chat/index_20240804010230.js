import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";

export default function ChatScreen({ route }) {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
