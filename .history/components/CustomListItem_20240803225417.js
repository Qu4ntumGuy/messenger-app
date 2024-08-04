import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

export default function CustomListItem({ id, chatName, enterChat }) {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://amaxfireandsecurity.co.uk/wp-content/uploads/2023/12/profile-pic-MD.jpg",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "900" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle for the youtube chat. This is a test subtitle
          for the youtube chat.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({});
