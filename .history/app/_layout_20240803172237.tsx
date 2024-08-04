import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2c6bed" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        headerTitleAlign: "center",
      }}
    >
      {/* <StatusBar style="auto" /> */}
      <Stack.Screen name="index" options={{ title: "Home" }} />
    </Stack>
  );
}
