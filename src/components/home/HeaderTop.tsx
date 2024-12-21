import i18 from "@/helpers/i18n";
import { fonts } from "@/styles/global.styles";
import HomeStyles from "@/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

const HeaderTop = () => {
  return (
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
  );
};

export default HeaderTop;
