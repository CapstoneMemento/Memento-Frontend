import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";
import mySubjectScreen from "./src/screens/mySubject";
import TestAlbumScreen from "./src/screens/testAlbum";
import OCRResultScreen from "./src/screens/ocrResult";
import { Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="내 암기장"
            component={mySubjectScreen}
            options={{ headerTitleStyle: { fontWeight: "bold" } }}
          />
          <Stack.Screen
            name="앨범"
            component={TestAlbumScreen}
            options={{ headerTitleStyle: { fontWeight: "bold" } }}
          />
          <Stack.Screen
            name="텍스트 추출 결과"
            component={OCRResultScreen}
            options={{
              headerTitle: () => <></>,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
