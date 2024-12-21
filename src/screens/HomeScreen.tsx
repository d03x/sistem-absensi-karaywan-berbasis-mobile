import CardActivity from "@/components/home/CardActivity";
import HomeMenu from "@/components/home/Menu";
import i18 from "@/helpers/i18n";
import { fonts } from "@/styles/global.styles";
import HomeStyles from "@/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, Alert, StatusBar, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useSharedValue,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";

export default function HomeScreen() {
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });

  navigation.setOptions({
    headerShown: false,
  });
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      Alert.alert("Ada kesalahan", "Anda tidak terhubung ke internet");
    });
    return unsubscribe;
  }, [navigation]);
  return false ? (
    <ActivityIndicator style={{ margin: "auto" }} size={30} />
  ) : (
    <View>
      <StatusBar
        translucent={false}
        backgroundColor={"#0066ff"}
        barStyle="dark-content"
      />
      <Animated.ScrollView
        bounces={false}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient colors={["#0066ff", "transparent"]}>
          <Animated.View style={[HomeStyles.header]}>
            <View style={HomeStyles.headerWrapper}>
              <Animated.Image
                style={[HomeStyles.headerAvatar]}
                source={require("@asset/images/image.jpg")}
              />
              <View>
                <Text style={[HomeStyles.employeeName, fonts.inter]}>
                  {i18.t("welcome")},Muhammad Nasrul
                </Text>
                <Text style={[HomeStyles.positionTitle, fonts.inter]}>
                  PT. Arka Mega Nusantara
                </Text>
              </View>
            </View>
            <View>
              <Ionicons name="log-out-outline" size={24} color={"white"} />
            </View>
          </Animated.View>
          {/* Card Activity */}
          <CardActivity />
          {/* END Card Activity */}
        </LinearGradient>

        {/* Menu */}
        <HomeMenu />
        {/* END menu */}
      </Animated.ScrollView>
    </View>
  );
}
