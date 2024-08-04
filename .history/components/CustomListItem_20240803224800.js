import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

export default function CustomListItem() {
  return (
    <ListItem>
      <Avatar rounded />
      <ListItem.Content>
        <ListItem.Title>Chat</ListItem.Title>
        <ListItem.Subtitle>Chat</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({});
