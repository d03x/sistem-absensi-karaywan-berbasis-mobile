/**
 * AbsensiApp component is the root component of the Absensi application.
 * It wraps the application with the AbsensiProvider context to provide
 * global state management for the application.
 *
 * @returns {JSX.Element} The root component of the Absensi application.
 */
import { AbsensiProvider } from "@/contexts/absensi-context";
import React from "react";
import { Text, StatusBar } from "react-native";
import { RootStackNavigator } from "@/Navigation";
import { useTranslation } from "react-i18next";
export default function AbsensiApp() {
  return (
    <AbsensiProvider>
      <StatusBar backgroundColor={"blue"} barStyle="light-content" />
      <RootStackNavigator />
    </AbsensiProvider>
  );
}
