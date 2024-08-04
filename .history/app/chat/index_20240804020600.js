import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../../firebase";

export default function ChatScreen() {
  const navigation = useNavigation();
  const router = useRoute();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    addDoc(collection(db, "chats", router.params.id, "messages"), {
      timestamp: serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    });
    setInput("");
  };

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

  useLayoutEffect(() => {
    try {
      const unsubscribe = onSnapshot(
        orderBy(
          collection(db, "chats", router.params.id, "messages"),
          "timestamp",
          "desc"
        ),
        (snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
      );
      return unsubscribe;
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  //   console.log(messages);

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
          <ScrollView>
            {messages.map(({ id, data }) =>
              data.email === auth.currentUser.email ? (
                <View key={id} style={styles.reciever}>
                  <Avatar
                    rounded
                    position="absolute"
                    containerStyle={{
                      position: "absolute",
                      bottom: -15,
                      right: -5,
                    }}
                    bottom={-15}
                    right={-5}
                    size={30}
                    source={{
                      uri: data.photoURL,
                    }}
                  />
                  <Text style={styles.recieverText}>{data.message}</Text>
                </View>
              ) : (
                <View key={id} style={styles.sender}>
                  <Avatar
                    rounded
                    position="absolute"
                    containerStyle={{
                      position: "absolute",
                      bottom: -15,
                      right: -5,
                    }}
                    bottom={-15}
                    right={-5}
                    size={30}
                    source={{
                      uri: data.photoURL,
                    }}
                  />
                  <Text style={styles.senderText}>{data.message}</Text>
                  <Text style={styles.senderName}>{data.displayName}</Text>
                </View>
              )
            )}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Signal message"
              style={styles.textInput}
            />
            <TouchableOpacity activeOpacity={0.5} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
      {/* <Text>{router.params.chatName}</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginBottom: 10,
  },
  textInput: {
    bottom: 0,
    height: 45,
    flex: 1,
    marginRight: 15,
    // borderColor: "transparent",
    backgroundColor: "#ECECEC",
    // borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    color: "grey",
    borderRadius: 30,
  },
});
