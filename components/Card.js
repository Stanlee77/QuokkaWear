import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";

const Card = () => (
  <View>
    <Text>Porozmawiajmy o faktach...</Text>
    <View>
      <Image source={assets.womanshirt_1} />
      <Text>jest twoj ulubioną bluzką</Text>
    </View>
    <Image />
  </View>
);

export default Card;
