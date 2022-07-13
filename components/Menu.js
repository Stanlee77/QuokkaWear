import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { MenuButton } from "./index";

import { assets, SIZES } from "../constants";

const Menu = ({ handleLockPress, handleShufflePress, handleWardrobePress }) => {
  return (
    <View>
      <Image
        // source={menuStyle}
        style={{
          width: "100%",
          height: 29,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingLeft: SIZES.font,
          paddingBottom: SIZES.font,
          paddingRight: SIZES.font,
        }}
      >
        <TouchableOpacity onPress={handleLockPress}>
          <Image
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
            }}
            source={assets.lock}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShufflePress}>
          <Image
            style={{
              width: 60,
              height: 60,
            }}
            source={assets.shuffle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleWardrobePress}>
          <Image
            style={{
              width: 60,
              height: 60,
            }}
            source={assets.go_in}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
