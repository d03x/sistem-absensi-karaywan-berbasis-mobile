import i18 from "@/helpers/i18n";
import { fonts } from "@/styles/global.styles";
import HomeStyles from "@/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function CardActivity() {
  return (
    <View style={HomeStyles.cardActivityWrapper}>
      <View style={HomeStyles.cardActivityContainer}>
        <View style={HomeStyles.cardActivityItemHeader}>
          <Ionicons style={[fonts.white]} name="calendar-outline" size={30} />
          <View>
            <Text style={[fonts.bold, fonts.white, { fontSize: 15 }]}>
              {i18.t("today")}, Minggu ,28 Oktober 2023
            </Text>
            <Text style={[{ fontSize: 12 }, fonts.white]}>
              {i18.t("schedule")} (08:00 - 15:00)
            </Text>
          </View>
        </View>
        <View style={HomeStyles.cardActivityItemBody}>
          <View
            style={{
              flex: 1,
              padding: 10,
              borderRightWidth: 1,
              borderRightColor: "#f2f2f2",
              alignItems: "center",
              gap: 7,
              justifyContent: "flex-start",
            }}
          >
            <Text
              style={{
                color: "green",
                backgroundColor: "#2fff0524",
                borderRadius: 10,
                padding: 6,
                paddingHorizontal: 10,
                fontSize: 11,
              }}
            >
              Absen Masuk
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              08.00 PM
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              gap: 7,
              flex: 1,
              padding: 10,
              borderRightWidth: 1,
              borderRightColor: "#f2f2f2",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "red",
                backgroundColor: "#ff000021",
                borderRadius: 10,
                padding: 6,
                paddingHorizontal: 10,
                fontSize: 11,
              }}
            >
              Total Hours
            </Text>
            <Text
              style={{
                color: "red",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              10 H 19 M
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              padding: 10,
              alignItems: "center",
              gap: 7,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#0151ff",
                backgroundColor: "#0004ff2d",
                borderRadius: 10,
                padding: 6,
                paddingHorizontal: 10,
                fontSize: 11,
              }}
            >
              Absen Pulang
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              --.--
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
