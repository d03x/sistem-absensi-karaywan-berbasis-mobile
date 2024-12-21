import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function HomeMenu() {
  const menu = [
    [
      {
        name: "Attendance",
        icon: "qr-code-outline",
        color: "green",
      },
      {
        name: "History",
        icon: "refresh-outline",
        color: "red",
      },
      {
        name: "Izin & Cuti",
        icon: "calendar-outline",
        color: "blue",
      },
      {
        name: "People",
        icon: "people-outline",
        color: "purple",
      },
    ],
    [
      {
        name: "Tugas",
        icon: "library-outline",
        color: "gray",
      },
      {
        name: "Pengajuan",
        icon: "briefcase",
        color: "orange",
      },
      {
        name: "Lembur",
        icon: "stopwatch-outline",
        color: "sky",
      },
      {
        name: "Lain Nya",
        icon: "grid-outline",
        color: "black",
      },
    ],
  ];
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
      {menu.map((e) => {
        return (
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {e.map((menus) => {
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
                    <Ionicons color={menus.color} size={23} name={menus.icon} />
                  </View>
                  <Text
                    style={{
                      marginTop: 3,
                      fontWeight: "bold",
                      fontSize: 11,
                    }}
                  >
                    {menus.name}
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
