import * as React from "react";
import { useState } from "react";
import { Text, SafeAreaView, View, StatusBar } from "react-native";

import { MenuButton, Card, Menu } from "../components";

import { assets, COLORS, NFTData, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const [nftData, setNftData] = useState(NFTData);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>This is Shuffle</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
