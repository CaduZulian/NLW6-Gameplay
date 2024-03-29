import 'expo-dev-client';
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import * as SplashScreen from "expo-splash-screen";

import { Background } from "./src/components";

import { Routes } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./src/hooks/auth";


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Background onLayout={onLayoutRootView}>
        <StatusBar style="light" backgroundColor="transparent" translucent />

    <AuthProvider>

        <Routes />
    </AuthProvider>




      </Background>
    </GestureHandlerRootView>
  );
}
