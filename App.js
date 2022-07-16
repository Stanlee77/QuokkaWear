import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Tabs from "./components/Tabs";
import { Statistics } from "./screens";

const App = () => {
  const [loaded] = useFonts({
    BarlowBold: require("./assets/fonts/Barlow/Barlow-Bold.ttf"),
    BarlowSemiBold: require("./assets/fonts/Barlow/Barlow-SemiBold.ttf"),
    BarlowMedium: require("./assets/fonts/Barlow/Barlow-Medium.ttf"),
    BarlowRegular: require("./assets/fonts/Barlow/Barlow-Regular.ttf"),
    BarlowLight: require("./assets/fonts/Barlow/Barlow-Light.ttf"),
  });

  if (!loaded) return null;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Statistics" component={Statistics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
