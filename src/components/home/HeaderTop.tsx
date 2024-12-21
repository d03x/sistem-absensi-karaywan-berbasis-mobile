import i18 from "@/helpers/i18n";
import { fonts } from "@/styles/global.styles";
import homeStyles from "@/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { ImageSourcePropType, Text, View } from "react-native";
import Animated, { SharedValue } from "react-native-reanimated";

type HeaderTopProps = {
  scrollY?: SharedValue<number>;
  photo: ImageSourcePropType;
  name: string;
  company: string;
};

const HeaderTop = ({ name, company, photo, scrollY }: HeaderTopProps) => {
  const navigation = useNavigation();
  return (
    <Animated.View style={[homeStyles.header]}>
      <View style={homeStyles.headerWrapper}>
        <Animated.Image style={[homeStyles.headerAvatar]} source={photo} />
        <View>
          <Text style={[homeStyles.employeeName, fonts.inter]}>
            {i18.t("welcome")},{name}
          </Text>
          <Text style={[homeStyles.positionTitle, fonts.inter]}>{company}</Text>
        </View>
      </View>
      <View>
        <IconButton
          onPress={() => {
            //@ts-ignore
            navigation.replace("login")
          }}
          icon={<Ionicons size={27} name="log-out-outline" color={"white"} />}
        />
      </View>
    </Animated.View>
  );
};

export default HeaderTop;
