import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Button, Input } from "react-native-elements";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

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

  const createChat = async () => {
    // await db.collection("chats").add({
    //   chatName: input,
    // }).then(() => {
    //   navigation.goBack();
    // }).catch((error) => alert(error));
    await addDoc(collection(db, "chats"), {
      chatName: input,
    });
    navigation.goBack();
  };

  return (
    <View>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={{
          type: "antdesign",
          name: "wechat",
          color: "gray",
        }}
        onSubmitEditing={createChat}
      />
      <Button onPress={createChat} title="Create new chat" />
    </View>
  );
}

const styles = StyleSheet.create({});
