import * as React from "react";
import { SafeAreaView, View, StatusBar, Text } from "react-native";

import { assets, COLORS, SIZES } from "../constants";

const Statistics = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: COLORS.light,
      }}
    >
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={COLORS.light}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello this is statistics</Text>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;
