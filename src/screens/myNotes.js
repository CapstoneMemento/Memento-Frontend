import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Moment from "react-moment";
import { Entypo } from "@expo/vector-icons";

export default function MyNotesScreen() {
  const [notes, setNotes] = useState([
    {
      title: "발명의 완성",
      type: "통문자",
      createdBy: new Date("Nov 20 2022 3:42:10"),
      text: "송금의뢰인이 착오송금임을 이유로 거래은행을 통하여 혹은 수취은행에 직접 송금액의 반환을 요청하고, 수취인도 송금의뢰인의 착오송금에 의하여 수취인의 계좌에 금원이 입금된 사실을 인정하여 수취은행에 그 반환을 승낙하고 있는 경우, 수취은행이 수취인에 대한 대출채권 등을 자동채권으로 하여 수취인의 계좌에 착오로 입금된 금원 상당의 예금채권과 상계하는 것은 수취은행이 선의인 상태에서 수취인의 예금채권을 담보로 대출을 하여 그 자동채권을 취득한 것이라거나 그 예금채권이 이미 제3자에 의하여 압류되었다는 등의 특별한 사정이 없는 한, 공공성을 지닌 자금이체시스템의 운영자가 그 이용자인 송금의뢰인의 실수를 기화로 그의 희생하에 당초 기대하지 않았던 채권회수의 이익을 취하는 행위로서 상계제도의 목적이나 기능을 일탈하고 법적으로 보호받을 만한 가치가 없으므로, 송금의뢰인에 대한 관계에서 신의칙에 반하거나 상계에 관한 권리를 남용하는 것이다. 수취인의 계좌에 착오로 입금된 금원 상당의 예금채권이 이미 제3자에 의하여 압류되었다는 특별한 사정이 있어 수취은행이 수취인에 대한 대출채권 등을 자동채권으로 하여 수취인의 그 예금채권과 상계하는 것이 허용되더라도 이는 피압류채권액의 범위 내에서만 가능하고, 그 범위를 벗어나는 상계는 신의칙에 반하거나 권리를 남용하는 것으로서 허용되지 않는다.",
    },
    {
      title: "수치한정 발명의 의의",
      type: "두문자",
      createdBy: new Date("Oct 20 2022 3:42:10"),
      text: "송금의뢰인이 착오송금임을 이유로 거래은행을 통하여 혹은 수취은행에 직접 송금액의 반환을 요청하고, 수취인도 송금의뢰인의 착오송금에 의하여 수취인의 계좌에 금원이 입금된 사실을 인정하여 수취은행에 그 반환을 승낙하고 있는 경우, 수취은행이 수취인에 대한 대출채권 등을 자동채권으로 하여 수취인의 계좌에 착오로 입금된 금원 상당의 예금채권과 상계하는 것은 수취은행이 선의인 상태에서 수취인의 예금채권을 담보로 대출을 하여 그 자동채권을 취득한 것이라거나 그 예금채권이 이미 제3자에 의하여 압류되었다는 등의 특별한 사정이 없는 한, 공공성을 지닌 자금이체시스템의 운영자가 그 이용자인 송금의뢰인의 실수를 기화로 그의 희생하에 당초 기대하지 않았던 채권회수의 이익을 취하는 행위로서 상계제도의 목적이나 기능을 일탈하고 법적으로 보호받을 만한 가치가 없으므로, 송금의뢰인에 대한 관계에서 신의칙에 반하거나 상계에 관한 권리를 남용하는 것이다. 수취인의 계좌에 착오로 입금된 금원 상당의 예금채권이 이미 제3자에 의하여 압류되었다는 특별한 사정이 있어 수취은행이 수취인에 대한 대출채권 등을 자동채권으로 하여 수취인의 그 예금채권과 상계하는 것이 허용되더라도 이는 피압류채권액의 범위 내에서만 가능하고, 그 범위를 벗어나는 상계는 신의칙에 반하거나 권리를 남용하는 것으로서 허용되지 않는다.",
    },
  ]);

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
        data={notes}
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
