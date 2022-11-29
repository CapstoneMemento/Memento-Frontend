import React from "react";
import { Image, Text, StyleSheet, View, Pressable } from "react-native";
import { useSelector } from "react-redux";

export default function OCRResultScreen() {
  const imgInfo = useSelector((state) => state.imgInfo.value);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "black" }}>
        <Image source={{ uri: imgInfo.url }} style={styles.image} />
      </View>
      <Pressable
        style={{
          padding: 16,
        }}
      >
        <Text style={styles.title}>텍스트 추출 결과</Text>
        <Text style={styles.text}>
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

  image: {
    width: "100%",
    resizeMode: "contain",
    aspectRatio: 1,
  },

  title: { fontSize: 18, marginBottom: 16, fontWeight: "bold" },

  text: { lineHeight: 24, fontSize: 16 },
});
