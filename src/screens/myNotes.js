import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { add } from "../redux/features/myNotes/myNotesSlice";

export default function MyNotesScreen() {
  const myNotes = useSelector((state) => state.myNotes.value);
  const dispatch = useDispatch();

  const getFormat = (date) => {
    return new Date(date).getFullYear() === new Date().getFullYear()
      ? new Date(date).toDateString() === new Date().toDateString()
        ? new Date(date).getHours() < 12
          ? "오전 h:mm"
          : "오후 h:mm"
        : "M월 DD일"
      : "YYYY.M.D";
  };

  const onPressLearnMore = () => {
    console.log("pressed");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myNotes}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.detail}>
              <Text style={styles.subText}>{item.type}</Text>
              <Moment
                style={styles.subText}
                element={Text}
                format={getFormat(item.createdBy)}
              >
                {item.createdBy}
              </Moment>
            </View>

            <View style={styles.contents}>
              <Text style={styles.text}>{item.text.slice(0, 60)}...</Text>
              <Pressable onPress={onPressLearnMore}>
                <Entypo name="dots-three-vertical" size={16} color="gray" />
              </Pressable>
            </View>
          </View>
        )}
      />

      <Pressable style={styles.roundBtnPressable} onPress={onPressLearnMore}>
        <View style={styles.roundButton}>
          <Entypo name="camera" size={24} color="white" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: "white" },

  item: {
    backgroundColor: "white",
    marginVertical: 14,
  },

  title: { fontSize: 14, fontWeight: "bold" },

  detail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  subText: { fontSize: 10, color: "gray" },

  contents: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: { fontSize: 12 },

  roundBtnPressable: {
    zIndex: 100,
    position: "absolute",
    bottom: 16,
    right: 16,
  },

  roundButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
