import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

export default function ChatScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
    });
  }, [navigation]);

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
