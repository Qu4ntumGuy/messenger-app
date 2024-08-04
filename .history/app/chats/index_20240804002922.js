import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Input } from "react-native-elements";

export default function ChatScreen() {
  const navigation = useNavigation();
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
    });
  }, [navigation]);

  return (
    <View>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={{
          type: "antdesign",
          name: "wechat",
          color: "black",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
