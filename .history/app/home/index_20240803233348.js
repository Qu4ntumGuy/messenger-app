import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import CustomListItem from "../../components/CustomListItem";
import { useNavigation, useRouter } from "expo-router";
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
          <TouchableOpacity onPress={signOut}></TouchableOpacity>
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //   console.log(authUser);
      if (!authUser) {
        router.replace("index");
      }
    });
    return unsubscribe;
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
