import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import Tabs from "./components/Tabs";

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
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
