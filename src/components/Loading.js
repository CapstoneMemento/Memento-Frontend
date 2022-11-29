import { Animated, Easing, Modal, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Loading() {
  const modalVisible = useSelector((state) => state.loadingModal.value);
  const rotateAni = new Animated.Value(0);

  useEffect(() => {
    if (modalVisible) {
      Animated.timing(rotateAni, {
        toValue: 360,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [rotateAni]);

  return (
    <Modal transparent={true} visible={modalVisible}>
      <View style={styles.background}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: rotateAni.interpolate({
                  inputRange: [0, 720],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          }}
        >
          <AntDesign name="loading1" size={36} color="white" />
        </Animated.View>
      </View>
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
});
