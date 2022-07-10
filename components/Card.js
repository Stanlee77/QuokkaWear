import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";

import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import MenuButton from "./MenuButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = ({ data, title, subtitle, image }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.light,
        borderRadius: SIZES.font,
        padding: SIZES.medium,
        marginBottom: SIZES.large,
        margin: SIZES.medium,
        ...SHADOWS.dark,
        height: 250,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.extraExtraLarge,
          color: COLORS.primary,
          fontFamily: FONTS.medium,
          marginBottom: SIZES.large,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: SIZES.large,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
          }}
        >
          <Image
            source={image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: SIZES.font,
              borderWidth: 1,
              borderColor: COLORS.primary,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.primary,
            margin: SIZES.font,
          }}
        >
          {subtitle}
        </Text>
      </View>
      <MenuButton
        minWidth={120}
        fontSize={SIZES.font}
        handlePress={() => navigation.navigate("Details", { data })}
      />
    </View>
  );
};

export default Card;
