import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { add } from "../../redux/myBook/myBookSlice";

export default function RoundButton() {
  const myBook = useSelector((state) => state.myBook.value);
  const dispatch = useDispatch();

  const onPressLearnMore = () => {
    console.log("pressed");
  };

  return (
    <Pressable style={styles.pressable} onPress={onPressLearnMore}>
      <View style={styles.button}>
        <Entypo name="camera" size={24} color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    zIndex: 100,
    position: "absolute",
    bottom: 16,
    right: 16,
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
