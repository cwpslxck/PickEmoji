import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}></Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#cc5f88",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    backgroundColor: "#cc5f88",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
