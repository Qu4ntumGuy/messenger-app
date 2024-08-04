import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

export default function RootLayout() {
  // const colorScheme = "dark";

  return (
    // <ThemeProvider
    //   value={
    //     // @ts-ignore
    //     colorScheme === "dark" ? DarkTheme : DefaultTheme
    //   }
    // >
    <Stack
      initialRouteName="home/index"
      screenOptions={{
        headerStyle: { backgroundColor: "#3c6bed" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff", fontSize: 15, fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register/index" options={{ title: "Register" }} />
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="chat/index" options={{ title: "Chats" }} />
    </Stack>
    // </ThemeProvider>
  );
}
