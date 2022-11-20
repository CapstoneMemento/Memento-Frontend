import React from "react";
import { StyleSheet, View } from "react-native";

import NoteList from "../components/NoteList";
import RoundButton from "../components/Buttons/RoundButton";

export default function MyBookScreen() {
  return (
    <View style={styles.container}>
      <NoteList />
      <RoundButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16, backgroundColor: "white" },
});
