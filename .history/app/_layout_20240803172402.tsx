import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
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
  );
}
