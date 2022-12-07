import { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import DocumentScanner from "react-native-document-scanner-plugin";
import * as ImagePicker from "expo-image-picker";

import { close } from "../../redux/reducers/Modal/newNoteModal";

const menu = [
  { icon: "pencil", text: "직접 입력하기" },
  { icon: "camera", text: "사진 촬영하기" },
  { icon: "image", text: "앨범에서 가져오기" },
];

export default function newNoteModal({ navigation }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
    }
  }, [image]);

  const modalVisible = useSelector((state) => state.newNoteModal.value);
  const dispatch = useDispatch();
  // 바깥을 누르면 Modal 닫기
  const onPressBackground = () => dispatch(close());

  const onPressItem = (itemIndex) => {
    if (itemIndex === 0) {
      // 직접 입력하기
    }

    if (itemIndex === 1) {
      // scanDocument();
    }

    if (itemIndex === 2) {
      navigation.navigate("앨범");
    }
  };

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setImage(scannedImages[0]);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Modal transparent={true} visible={modalVisible}>
      <Pressable style={styles.background} onPress={onPressBackground}>
        <View style={styles.wrapper}>
          <FlatList
            data={menu}
            renderItem={({ item, index }) => (
              <>
                <Pressable
                  style={styles.item}
                  onPress={() => onPressItem(index)}
                >
                  <Entypo name={item.icon} size={24} color="black" />
                  <Text style={{ marginLeft: 10 }}>{item.text}</Text>
                </Pressable>
                {/* 마지막 item에는 라인 추가하지 않기 */}
                {index !== 2 && <View style={styles.line} />}
              </>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1000,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 235,
    paddingHorizontal: 20,
  },

  line: { flex: 1, height: 1, backgroundColor: "#E0E0E0" },

  item: { flex: 1, flexDirection: "row", paddingVertical: 20 },
});
