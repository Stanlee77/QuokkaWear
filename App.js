import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Lock from "./screens/Lock";
import Shuffle from "./screens/Shuffle";
import Wardrobe from "./screens/Wardrobe";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    BarlowBold: require("./assets/fonts/Barlow/Barlow-Bold.ttf"),
    BarlowSemiBold: require("./assets/fonts/Barlow/Barlow-SemiBold.ttf"),
    BarlowMedium: require("./assets/fonts/Barlow/Barlow-Medium.ttf"),
    BarlowRegular: require("./assets/fonts/Barlow/Barlow-Regular.ttf"),
    BarlowLight: require("./assets/fonts/Barlow/Barlow-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lock" component={Lock} />
        <Stack.Screen name="Shuffle" component={Shuffle} />
        <Stack.Screen name="Wardrobe" component={Wardrobe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
