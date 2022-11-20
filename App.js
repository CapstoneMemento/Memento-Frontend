import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { store } from "./src/redux/store";
import mySubjectScreen from "./src/screens/mySubject";

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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
