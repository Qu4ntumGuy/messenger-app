import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import CustomListItem from "../../components/CustomListItem";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => <View style={{ marginLeft: 20 }}></View>,
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
