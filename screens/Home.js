// import * as React from "react";
// import { useState } from "react";
// import {
//   Button,
//   StyleSheet,
//   Text,
//   View,
//   SafeArea,
//   SafeAreaView,
// } from "react-native";
// // import { StatusBar } from "expo-status-bar";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // import { Image, View, SafeArea, SafeAreaView, FlatList } from "react-native";

// const Home = ({ navigation }) => {

//   // const handleSearch = (value) => {
//   //   if (!value.length) return setNftData(NFTData);

//   //   const filteredData = NFTData.filter((item) =>
//   //     item.name.toLowerCase().includes(value.toLowerCase())
//   //   );

//   //   if (filteredData.length) {
//   //     setNftData(filteredData);
//   //   } else {
//   //     setNftData(NFTData);
//   //   }
//   // };

//   return (
// <SafeAreaView
//   style={{
//     flex: 1,
//     justifyContent: "space-between",
//   }}
// >
//   <View style={{ zIndex: 0, display: "flex" }}>
//     <Card
//       data={nftData}
//       title={"Porozmawiajmy o faktach..."}
//       subtitle={"jest twoją ulubioną bluzką"}
//       image={assets.womanshirt_2}
//     />
//     <Card
//       data={nftData}
//       title={"Czas na wiosenne porządki..."}
//       subtitle={"jest nieużywana. Może warto ją sprzedać?"}
//       image={assets.womanshirt_4}
//     />
//   </View>
//   <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     <Text>Home Screen</Text>
//     <Button
//       title="Go to Details"
//       onPress={() => navigation.navigate("Details")}
//     />
//   </View>
//   <Menu menuStyle={assets.menu_roof} />
// </SafeAreaView>
//   );
// };

// export default Home;

import * as React from "react";
import { useState } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";

import { Card } from "../components";

import { assets, COLORS, SIZES } from "../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />
      <View style={{ zIndex: 0, display: "flex" }}>
        <Card
          title={"Porozmawiajmy o faktach..."}
          subtitle={"jest twoją ulubioną bluzką"}
          image={assets.womanshirt_2}
          handlePress={() => navigation.navigate("Statistics")}
        />
        <Card
          title={"Czas na wiosenne porządki..."}
          subtitle={"jest nieużywana. Może warto ją sprzedać?"}
          image={assets.womanshirt_4}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
