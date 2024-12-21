import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function HomeMenu() {
  return (
    <View
      style={{
        elevation: 1,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
        padding: 0,
        paddingVertical: 10,
      }}
    >
      {[1, 2].map(() => {
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {[1, 2, 3, 4].map(() => {
              return (
                <View
                  style={{
                    padding: 10,
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <View
                    style={{
                      width: 44,
                      borderRadius: 40,
                      backgroundColor: "#f2f2f2",
                      aspectRatio: 1 / 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome size={23} name="calendar-minus-o" />
                  </View>
                  <Text
                    style={{
                      marginTop: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                    }}
                  >
                    Attendance
                  </Text>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
}
