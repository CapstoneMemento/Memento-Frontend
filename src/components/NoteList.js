import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { add } from "../redux/mySubject/mySubjectSlice";

export default function NoteList() {
  const mySubject = useSelector((state) => state.mySubject.value);
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
    <FlatList
      data={mySubject}
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
            <Text style={styles.text}>{item.text.slice(0, 50)}...</Text>
            <Pressable onPress={onPressLearnMore}>
              <Entypo name="dots-three-vertical" size={16} color="gray" />
            </Pressable>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    marginVertical: 14,
  },

  title: { fontSize: 16, fontWeight: "bold" },

  detail: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  subText: { fontSize: 12, color: "gray" },

  contents: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: { fontSize: 14, width: "95%" },
});
