/**
 * This file serves as the entry point for the Absensi application.
 * It imports the main `AbsensiApp` component from the "@/App" module
 * and exports it as the default export.
 */
import AbsensiApp from "@/App";
import React from "react";
import { useFonts } from "expo-font";
import { StatusBar, Text } from "react-native";
export default function App() {
  // const [fontLoaded] = useFonts(require("@/assets/fonts/Inter-Regular.ttf"));

  // if (!fontLoaded) {
  //   return <Text>Font Not Loaded</Text>;
  // }

  return <AbsensiApp />;
}
