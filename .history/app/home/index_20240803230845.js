import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import CustomListItem from "../../components/CustomListItem";
import { useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import { auth } from "../../firebase";

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Avatar
            rounded
            source={{
              uri: auth?.currentUser?.photoURL,
            }}
            style={{ width: 40, height: 40 }}
          />
        </View>
      ),
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
