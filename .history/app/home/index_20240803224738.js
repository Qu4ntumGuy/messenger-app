import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomListItem from "../../components/CustomListItem";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
