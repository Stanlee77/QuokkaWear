import * as React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Lock, Shuffle, Wardrobe } from "../screens";
import { MenuButton } from "./";

import { assets } from "../constants";

const Tab = createBottomTabNavigator();

const tabBarIcon = (focused, icon) => (
  <MenuButton focused={focused} icon={icon} />
);

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        postion: "absolute",
        left: "5%",
        right: "5%",
        width: "90%",
        bottom: 10,
        elevation: 2,
        borderRadius: 15,
      },
    }}
    initialRouteName="Home"
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => tabBarIcon(focused, assets.home),
      }}
    />
    <Tab.Screen
      name="Lock"
      component={Lock}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => tabBarIcon(focused, assets.lock),
      }}
    />
    <Tab.Screen
      name="Shuffle"
      component={Shuffle}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => tabBarIcon(focused, assets.shuffle),
      }}
    />
    <Tab.Screen
      name="Wardrobe"
      component={Wardrobe}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused }) => tabBarIcon(focused, assets.go_in),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
