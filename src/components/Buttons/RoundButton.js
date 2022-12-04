import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import { open } from "../../redux/reducers/Modal/newNoteModal";

export default function RoundButton() {
  const dispatch = useDispatch();
  const openModal = () => dispatch(open());

  const onPress = () => {
    openModal();
  };

  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <View style={styles.button}>
        <Entypo name="plus" size={24} color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    zIndex: 10,
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
