import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { assets, SIZES } from "../constants";

const Menu = ({ menuStyle }) => {
  return (
    <View>
      <Image
        source={menuStyle}
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details");
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              width: 60,
              height: 60,
            }}
            source={assets.lock}
          />
        </TouchableOpacity>
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={assets.shuffle}
        />
        <Image
          style={{
            width: 60,
            height: 60,
          }}
          source={assets.go_in}
        />
      </View>
    </View>
  );
};

export default Menu;
