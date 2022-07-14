import * as React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import { MenuButton } from "./index";

import { assets, SIZES } from "../constants";

const Menu = ({
  menuStyle,
  handleLockPress,
  handleShufflePress,
  handleWardrobePress,
}) => {
  return (
    <View>
      <Image
        source={menuStyle}
        style={{
          width: "100%",
          height: 17.5,
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
        <MenuButton
          handlePress={handleLockPress}
          icon={assets.lock}
          iconActive={assets.lock_active}
        />
        <MenuButton
          handlePress={handleShufflePress}
          icon={assets.shuffle}
          iconActive={assets.shuffle_active}
        />
        <MenuButton
          handlePress={handleWardrobePress}
          icon={assets.go_in}
          iconActive={assets.go_in_active}
        />
      </View>
    </View>
  );
};

export default Menu;
