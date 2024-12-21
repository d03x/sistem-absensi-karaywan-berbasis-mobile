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
  const headerAvatarAnimated = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      scrollY.value,
      [0, 50],
      [10, 100],
      Extrapolation.CLAMP
    );
    const border = interpolate(
      scrollY.value,
      [0, 50],
      [0, 2],
      Extrapolation.CLAMP
    );
    return {
      borderWidth: border,
      borderColor: "white",
      borderRadius: borderRadius,
    };
  });
  const headerAnimated = useAnimatedStyle(() => {
    const changeHeight = interpolate(
      scrollY.value,
      [0, 55],
      [55, 37],
      Extrapolation.CLAMP
    );
    return {
      height: changeHeight,
    };
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
          <Animated.View style={[HomeStyles.header, headerAnimated]}>
            <View style={HomeStyles.headerWrapper}>
              <Animated.Image
                style={[HomeStyles.headerAvatar, headerAvatarAnimated]}
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
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sed
          doloremque tempore consequatur cupiditate blanditiis maxime possimus
          iste ad asperiores in sint consectetur deleniti itaque recusandae,
          nostrum culpa repellat! Magnam. Fuga harum enim consectetur eaque
          delectus quas saepe amet, veniam ad necessitatibus modi incidunt ullam
          asperiores. Nulla, laboriosam neque. Voluptate voluptatum eligendi
          ipsa mollitia eaque exercitationem, unde blanditiis error earum.
          Consequuntur voluptatibus cumque eius dolorem nihil veritatis
          voluptates odio aliquam nemo nulla, dicta reiciendis fuga odit quam
          atque beatae provident quo sapiente quae ex? Ullam ipsam recusandae
          earum et beatae? Dolor quidem impedit optio officiis atque iste
          perferendis ut voluptates velit modi numquam omnis enim, hic sunt vero
          voluptatibus qui quisquam sed laborum commodi. Provident magni veniam
          ab aperiam excepturi. Cumque magnam non id, unde velit ullam dolore
          aut facere quisquam nobis commodi laboriosam dolores enim vitae
          provident? Quia ex facere nobis, rem totam recusandae error deleniti
          cupiditate voluptatum reiciendis? Magnam sapiente quo cupiditate
          corporis! Optio, fuga unde nesciunt a quo aliquid molestias ratione
          repudiandae nostrum deserunt nam quos voluptatem iure repellat
          veritatis rem! In, molestiae! Unde laborum quod natus? Amet asperiores
          ex perferendis magnam aliquid temporibus vel est officiis
          reprehenderit eaque. Magni velit voluptatem est ea. Dolorum possimus
          dignissimos blanditiis repudiandae tenetur itaque sunt a aut. Quam,
          dolorum saepe. Vitae placeat, nobis voluptas iure eaque voluptates
          velit pariatur ipsa hic, provident sunt qui dolorum culpa debitis
          excepturi incidunt aliquam quos dolorem nihil. Porro officia neque
          voluptatem id facere doloremque? Voluptas unde odio aspernatur eos
          ducimus ea deleniti corporis, explicabo recusandae pariatur harum
          ipsam modi. Reprehenderit, dolorum vitae? Beatae saepe quis harum eius
          quaerat doloremque ad ea eum, nulla voluptates? Est, voluptatum. Hic
          dolorem iusto vel unde, minima incidunt temporibus illo, mollitia,
          saepe eos animi! Molestias unde eum, magnam voluptatibus dolore
          delectus vitae ratione nisi iusto quibusdam autem consequuntur
          tenetur?
        </Text>
      </Animated.ScrollView>
    </View>
  );
}
