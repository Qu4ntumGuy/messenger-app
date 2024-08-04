import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://logowik.com/content/uploads/images/signal-messenger-icon9117.jpg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Login Screen</Text>
      <View style={styles.inputContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3c6bed",
  },
});
