import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#578af1" },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "#fff" },
        headerTitleAlign: "center",
      }}
    >
      {/* <StatusBar style="auto" /> */}
      <Stack.Screen name="index" options={{ title: "Login" }} />
    </Stack>
  );
}
