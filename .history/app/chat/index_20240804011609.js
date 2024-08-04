import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function ChatScreen() {
  const navigation = useNavigation();
  const router = useRoute();
  return (
    <View>
      <Text>{router.params.chatName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
