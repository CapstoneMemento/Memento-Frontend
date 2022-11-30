import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import { SECRET_KEY, INVOKE_URL } from "@env";
import Loading from "../components/Modals/Loading";
import { end, start } from "../redux/reducers/Modal/loadingSlice";
import { set } from "../redux/reducers/OCR/imgInfoSlice";

const testImages = [
  {
    source: require("../assets/note-1.jpg"),
    name: "note-1",
    url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNqYae%2FbtrSsSIq5ql%2Fc9eAOE74cCmefhM6tundJK%2Fimg.jpg",
  },
  {
    source: require("../assets/note-2.jpg"),
    name: "note-2",
    url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfhUqF%2FbtrSqMoO9bb%2FY8EYyPzLprscQMXCtPBPaK%2Fimg.jpg",
  },
  {
    source: require("../assets/note-3.jpg"),
    name: "note-3",
    url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fy46yK%2FbtrStz2W5A8%2FKmarFTiVsHQbfBgSF4FXYK%2Fimg.jpg",
  },
  {
    source: require("../assets/note-4.jpg"),
    name: "note-4",
    url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fckralv%2FbtrStP5GKAp%2FrSslZ6JtEZu2ssbqI2Bht0%2Fimg.jpg",
  },
];

export default function TestAlbumScreen({ navigation }) {
  const dispatch = useDispatch();
  const setImgInfo = (info) => dispatch(set(info));
  const startLoading = () => dispatch(start());
  const endLoading = () => dispatch(end());

  const getImage = async (img) => {
    await runOCR(img);
  };

  const runOCR = async ({ name, url }) => {
    startLoading();
    const result = await (
      await fetch(`${INVOKE_URL}`, {
        method: "POST",
        headers: {
          "X-OCR-SECRET": `${SECRET_KEY}=`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          images: [
            {
              format: "jpeg",
              name,
              data: null,
              url,
            },
          ],
          lang: "ko",
          requestId: "string",
          timestamp: 0,
          version: "V2",
          enableTableDetection: false,
        }),
      })
    ).json();
    setImgInfo({ url, textFields: result.images[0].fields });
    endLoading();
    navigation.navigate("텍스트 추출 결과");
  };

  return (
    <View style={styles.container}>
      {testImages.map((item) => (
        <TouchableOpacity
          key={item.name}
          onPress={async () => await getImage(item)}
        >
          <Image style={styles.photo} source={item.source} />
        </TouchableOpacity>
      ))}
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 14,
  },

  photo: {
    width: 106,
    height: 106,
    margin: 2,
  },
});
