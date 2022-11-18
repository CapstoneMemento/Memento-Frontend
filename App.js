import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyNotesScreen from "./src/screens/myNotes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="내 암기장"
          component={MyNotesScreen}
          options={{ headerTitleStyle: { fontWeight: "bold" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
