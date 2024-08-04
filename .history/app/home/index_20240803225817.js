import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomListItem from "../../components/CustomListItem";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Signal</Text>
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
