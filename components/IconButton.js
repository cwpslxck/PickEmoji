import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export default function IconButton({ onPress, icon, label }) {
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <MaterialIcons name={icon} size={36} color="#000" />
    </Pressable>
  );
}
