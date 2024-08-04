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
      screenOptions={{
        headerStyle: { backgroundColor: "#3a77f1" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff", fontSize: 15, fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      {/* <StatusBar style="auto" /> */}
      <Stack.Screen name="index" options={{ title: "Login" }} />
    </Stack>
    // </ThemeProvider>
  );
}
