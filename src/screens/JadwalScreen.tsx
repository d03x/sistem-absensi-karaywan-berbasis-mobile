import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Agenda } from "react-native-calendars";

const JadwalScreen = () => {
  const [selected, setSelected] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const subsiciru = navigation.addListener("focus", () => {});
    return subsiciru;
  }, [navigation]);

  return (
    <Agenda
      renderItem={() => {
        return <Text>DADAN</Text>;
      }}
      showClosingKnob={true}
      renderEmptyDate={() => <Text>DADAN</Text>}
      loadItemsForMonth={() => <Text>DADAN</Text>}
      rowHasChanged={() => {
        return <Text>DADAN</Text>;
      }}
      items={{
        "2024-12-20": [{ name: "item 1 - any js object" }],
        "2024-12-21": [{ name: "item 2 - any js object", height: 80 }],
        "2024-12-22": [],
        "2024-12-23": [
          { name: "item 3 - any js object" },
          { name: "any js object" },
        ],
      }}
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedColor: "orange",
        },
      }}
    />
  );
};

export default JadwalScreen;
