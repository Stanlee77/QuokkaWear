import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const MenuButton = ({ handlePress }) => {
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>Click me to go in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuButton;
