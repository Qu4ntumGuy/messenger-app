import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-elements";

export default function ChatScreen() {
  const navigation = useNavigation();
  const router = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",

      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            rounded
            source={{
              uri: "https://amaxfireandsecurity.co.uk/wp-content/uploads/2023/12/profile-pic-MD.jpg",
            }}
          />
          <Text>{router.params.chatName}</Text>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{router.params.chatName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
