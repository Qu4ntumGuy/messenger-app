import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Login Screen</Text>
    </View>
  );
}
