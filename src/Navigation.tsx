/**
 * Navigation configuration for the application.
 *
 * This file sets up the different navigators used in the app, including:
 * - `AppStack`: A stack navigator for the main application flow.
 * - `AuthStack`: A stack navigator for the authentication flow.
 * - `RootStack`: A stack navigator for the root flow.
 * - `HomeTabs`: A bottom tab navigator for the home screen tabs.
 *
 * The navigators are created using `@react-navigation/native-stack` and `@react-navigation/bottom-tabs`.
 */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "@/screens/HomeScreen";
import JadwalScreen from "@/screens/JadwalScreen";
import ProfileScreen from "@screen/ProfileScreen";
import NotificationScreen from "@screen/NotificationScreen";
import {
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { View } from "react-native";
import i18 from "./helpers/i18n";
import { useTranslation } from "react-i18next";
import FastImage from "react-native-fast-image";
import TabBar from "@component/TabBar";
import LoginScreen from "@screen/auth/LoginScreen";
const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const HomeTab = createBottomTabNavigator();
export const HomeTabs = () => {
  const { t } = useTranslation();
  return (
    <HomeTab.Navigator
      tabBar={TabBar}
      screenOptions={{
        tabBarShowLabel: Platform.OS == "ios" ? true : true,
        headerTitleStyle: {
          fontSize: 14,
        },
        headerStyle: {
          height: 60,
        },
      }}
      initialRouteName="home"
      id={undefined}
    >
      <HomeTab.Screen
        options={{
          title: t("welcome"),
          tabBarIcon: () => <Ionicons size={25} name="home-outline" />,
        }}
        name={"home"}
        component={HomeScreen}
      />
      <HomeTab.Screen
        options={{
          title: t("absent_days"),
          tabBarIcon: () => <Ionicons size={23} name="calendar-outline" />,
        }}
        name="jadwal"
        component={JadwalScreen}
      />
      <HomeTab.Screen
        options={{
          title: t("attendance"),
          tabBarIcon: () => <Ionicons size={23} name="finger-print-outline" />,
        }}
        name="attendance"
        component={NotificationScreen}
      />

      <HomeTab.Screen
        options={{
          headerRight(props) {
            return (
              <Ionicons
                style={{ marginRight: 10 }}
                name="settings-outline"
                size={25}
              />
            );
          },
          headerLeft: () => {
            return (
              <FastImage
                resizeMode="contain"
                style={{
                  marginHorizontal: 10,
                  marginRight: 4,
                  borderRadius: 100,
                  aspectRatio: 1 / 1,
                  width: 30,
                  height: 30,
                }}
                source={{
                  uri: "https://lh3.googleusercontent.com/ogw/AF2bZyj-pOiSfI7Ripwkv4MBIipFIuDXElwPc1tabhcqjJEFyg=s32-c-mo",
                }}
              />
            );
          },
          title: t("notification"),
          tabBarIcon: () => <Ionicons size={23} name="notifications-outline" />,
        }}
        name="notification"
        component={NotificationScreen}
      />
      <HomeTab.Screen
        options={{
          title: t("profile"),
          tabBarIcon: () => <Ionicons size={23} name="person-outline" />,
        }}
        name={"profile"}
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
};

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="login"
        id={undefined}
      >
        <RootStack.Screen name="home-tab" component={HomeTabs} />
        <RootStack.Screen name="login" component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export { RootStackNavigator };
