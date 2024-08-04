import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

export default function Index() {
  return (
    <View>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat2.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Login Screen</Text>
    </View>
  );
}
