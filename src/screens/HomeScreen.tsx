import CardActivity from "@/components/home/CardActivity";
import HeaderTop from "@/components/home/HeaderTop";
import HomeMenu from "@/components/home/Menu";
import useAuthStore from "@/stores/useAuthStore";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
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
  const { userData } = useAuthStore();
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.warn("Anda tidak terhubung ke internet");
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
          <HeaderTop
            name={userData?.name}
            company="Digicylab Agency"
            photo={{
              uri: userData?.picture,
            }}
          />
          <CardActivity />
        </LinearGradient>
        <HomeMenu />
      </Animated.ScrollView>
    </View>
  );
}
