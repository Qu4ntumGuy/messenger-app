import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, ListItem } from "react-native-elements";

export default function CustomListItem() {
  return (
    <ListItem>
      <Avatar rounded />
    </ListItem>
  );
}

const styles = StyleSheet.create({});
