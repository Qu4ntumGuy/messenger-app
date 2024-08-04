import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

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
          <Text
            style={{
              color: "white",
              marginLeft: 17,
              fontWeight: "700",
            }}
          >
            {router.params.chatName}
          </Text>
        </View>
      ),

      //   headerLeft: () => (
      //     <TouchableOpacity
      //       style={{
      //         marginLeft: 10,
      //       }}
      //       onPress={navigation.goBack}
      //       activeOpacity={0.5}
      //     >
      //       <AntDesign name="arrowleft" size={24} color="white" />
      //     </TouchableOpacity>
      //   ),

      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <>
          <ScrollView>{/* All Chat Messages */}</ScrollView>
        </>
      </KeyboardAvoidingView>
      {/* <Text>{router.params.chatName}</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
