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
        <View style={{ marginLeft: 20 }}>
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
    });
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
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
