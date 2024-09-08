import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

export default function CircleButton({ onPress }) {
  return (
    <View
      style={{
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderWidth: 4,
        borderColor: "#000",
        borderRadius: 42,
        padding: 3,
      }}
    >
      <Pressable
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 42,
          backgroundColor: "#cc5f88",
        }}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color="#000" />
      </Pressable>
    </View>
  );
}
