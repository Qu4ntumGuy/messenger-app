import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const screenOptions = {
    headerStyle: { backgrpundColor: "blue" },
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
      }}
    >
      {/* <StatusBar style="auto" /> */}
      <Stack.Screen name="index" />
    </Stack>
  );
}
