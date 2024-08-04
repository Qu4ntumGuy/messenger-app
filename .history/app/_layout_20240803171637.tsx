import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack screenOptions={screenOptions}>
      {/* <StatusBar style="auto" /> */}
      <Stack.Screen name="index" />
    </Stack>
  );
}
