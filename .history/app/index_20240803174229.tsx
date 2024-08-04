import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Login Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
});
