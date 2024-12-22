/**
 * AbsensiApp component is the root component of the Absensi application.
 * It wraps the application with the AbsensiProvider context to provide
 * global state management for the application.
 *
 * @returns {JSX.Element} The root component of the Absensi application.
 */
import { AbsensiProvider } from "@/contexts/absensi-context";
import React from "react";
import { Text, StatusBar, View } from "react-native";
import { RootStackNavigator } from "@/Navigation";
import { PaperProvider, useTheme } from "react-native-paper";
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Montserrat_500Medium,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { ActivityIndicator } from "@react-native-material/core";
export default function AbsensiApp() {
  const [fontLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Inter_700Bold,
    Montserrat_500Medium,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  if (fontLoaded === false) {
    return (
      <ActivityIndicator
        color="blue"
        style={{
          margin: "auto",
        }}
        size={36}
      />
    );
  }
  return (
    <PaperProvider>
      <AbsensiProvider>
        <StatusBar backgroundColor={"blue"} barStyle="light-content" />
        <RootStackNavigator />
      </AbsensiProvider>
    </PaperProvider>
  );
}
