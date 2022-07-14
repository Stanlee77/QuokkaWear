import * as React from "react";

import { Image, View } from "react-native";

const MenuButton = ({ focused, icon }) => {
  return (
    <View
      style={{
        top: 7,
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? "#7734D4" : "#260259",
        }}
      />
    </View>
  );
};

export default MenuButton;
