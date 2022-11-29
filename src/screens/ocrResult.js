import React from "react";
import { Image, Text, StyleSheet, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function OCRResultScreen() {
  const imgInfo = useSelector((state) => state.imgInfo.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "black" }}>
        <Image
          source={{ uri: imgInfo.url }}
          style={{
            width: "100%",
            resizeMode: "contain",
            aspectRatio: 1,
          }}
        />
      </View>
      <Pressable
        style={{
          padding: 16,
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 16, fontWeight: "bold" }}>
          텍스트 추출 결과
        </Text>
        <Text style={{ lineHeight: 24, fontSize: 16 }}>
          {imgInfo.textFields.map((item) => `${item.inferText} `)}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
