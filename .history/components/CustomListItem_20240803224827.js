import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

export default function CustomListItem() {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title>Youtube Chat</ListItem.Title>
        <ListItem.Subtitle>Chat</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({});
