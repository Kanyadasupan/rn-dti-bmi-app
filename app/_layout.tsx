import { Stack } from "expo-router";
import {
  useFonts,
  Prompt_400Regular,
  Prompt_700Bold,
} from "@expo-google-fonts/prompt";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="bmi"
        options={{
          title: "BMI Calculator",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000000",
            fontFamily: "Prompt_700Bold",
            fontSize: 20,
          },
        }}
      />
    </Stack>
  );
}
