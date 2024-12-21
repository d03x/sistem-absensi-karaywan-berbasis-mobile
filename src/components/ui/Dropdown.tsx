import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = () => {
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);
  const [value, setValue] = useState(null);

  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      style={{ borderWidth: 0, elevation: 3 }}
      dropDownContainerStyle={{
        borderWidth: 1,
        borderColor: "white",
        elevation: 2,
      }}
      mode="SIMPLE"
      showBadgeDot={true}
      disableBorderRadius={true}
      value={value}
      setValue={setValue}
      setItems={setItems}
      setOpen={setOpen}
      open={open}
      items={items}
    />
  );
};
export{
    Dropdown,
}