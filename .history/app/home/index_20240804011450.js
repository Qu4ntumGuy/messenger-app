import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CustomListItem from "../../components/CustomListItem";
import { useRouter } from "expo-router";
import { Avatar } from "react-native-elements";
import { auth, db } from "../../firebase";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [chats, setChats] = useState([]);

  const router = useRouter();
  const navigation = useNavigation();
  //   const route = useNavigation();

  const signOutUser = () => {
    auth.signOut().then(() => {
      router.replace("");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
                // ||  "https://amaxfireandsecurity.co.uk/wp-content/uploads/2023/12/profile-pic-MD.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      ),

      headerRight: () => (
        <View
          style={{
            marginRight: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 60,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("addChat/index")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={21} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //       console.log(authUser);
  //       if (!authUser) {
  //         router.replace("index");
  //       }
  //     });
  //     return unsubscribe;
  //   }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "chats"), (snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  const enterChat = (id, chatName) => {
    navigation.navigate({
      name: "chat/index",
      params: {
        id,
        chatName,
      },
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
