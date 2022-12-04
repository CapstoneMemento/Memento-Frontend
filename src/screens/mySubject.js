import React from "react";
import { Image, StyleSheet, View } from "react-native";

import NoteList from "../components/NoteList";
import RoundButton from "../components/Buttons/RoundButton";
import NewNoteModal from "../components/Modals/NewNoteModal";

export default function MySubjectScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <NoteList />
      <RoundButton />
      <NewNoteModal navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
});
