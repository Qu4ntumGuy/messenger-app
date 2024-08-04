import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function CustomListItem({ id, chatName, enterChat }) {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, "chats", id, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) =>
      setChatMessages(
        snapshot.docs.map((doc) => ({
          // id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return unsubscribe;
  });

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://amaxfireandsecurity.co.uk/wp-content/uploads/2023/12/profile-pic-MD.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "900" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.data?.displayName}:{" "}
          {chatMessages?.[0]?.data?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({});
