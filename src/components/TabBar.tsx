import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { TouchableHighlight, View } from "react-native";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const heightTabBar = 55;
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderBottomColor: "#f2f2f2",
        overflow: "hidden",
        borderTopColor: "#dedede",
        minHeight: heightTabBar,
        height: heightTabBar,
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel != undefined
            ? options.tabBarLabel
            : options.title != undefined
            ? options.title
            : route.name;
        const isFocused = state.index == index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <TouchableHighlight
            onLongPress={onLongPress}
            style={{
              aspectRatio: 1 / 1,
              borderRadius: 100,
              backgroundColor: isFocused ? "#f2f2f2" : "transparent",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "#dedede",
              borderWidth: isFocused ? 1 : 0,
              height: heightTabBar - 10,
            }}
            underlayColor={"transparent"}
            key={route.key}
            onPress={onPress}
          >
            <options.tabBarIcon size={26} focused={isFocused} color={"red"} />
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default TabBar;
