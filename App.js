import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Platform } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";
import domtoimage from "dom-to-image";

import IconButton from "./components/IconButton";
import CircleButton from "./components/CircleButton";
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";

const img = require("./assets/images/background-image.jpg");

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const [selectedImg, setSelectedImg] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [modalVis, setModalVis] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  const imageRef = useRef();

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
      setShowOptions(true);
    } else {
      alert("You didn't select any image.");
    }
  };

  const onReset = () => {
    setShowOptions(false);
    setSelectedImg(null);
    setPickedEmoji(null);
  };
  const onAdd = () => {
    setModalVis(true);
  };

  const onModalClose = () => {
    setModalVis(false);
  };

  const onSaveAsync = async () => {
    if (Platform.OS !== "web") {
      try {
        const localUri = await captureRef(imageRef, {
          height: 480,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement("a");
        link.download = "image.jpeg";
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imgContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer pl={img} selectedImg={selectedImg} />
          {pickedEmoji && (
            <EmojiSticker imageSize={60} stickerSource={pickedEmoji} />
          )}
        </View>
      </View>
      {showOptions ? (
        <View style={{ position: "absolute", bottom: 20 }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <IconButton icon="refresh" onPress={onReset} />
            <CircleButton onPress={onAdd} />
            <IconButton icon="save-alt" onPress={onSaveAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerCon}>
          <Button
            label={"Choose A Photo"}
            theme={"primary"}
            onPress={pickImageAsync}
          />
        </View>
      )}
      <EmojiPicker isVisible={modalVis} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4a8c6",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerCon: {
    marginBottom: 20,
    alignItems: "center",
  },
});
