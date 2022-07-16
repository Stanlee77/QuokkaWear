import { TouchableOpacity, View, Text, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";

const Card = ({ title, subtitle, image, handlePress }) => {
  return (
    <View
      style={{
        position: "relative",
        backgroundColor: COLORS.light,
        borderRadius: SIZES.font,
        margin: SIZES.medium,
        padding: SIZES.large,
        ...SHADOWS.dark,
        height: 250,
      }}
    >
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={handlePress}
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
          <Image
            source={image}
            resizeMode="cover"
            style={{
              width: 80,
              height: 80,
              borderRadius: SIZES.font,
              borderWidth: 1,
              borderColor: COLORS.primary,
              flex: 1,
            }}
          />
          <Text
            style={{
              fontSize: SIZES.large,
              color: COLORS.primary,
              margin: SIZES.font,
              flex: 3,
            }}
          >
            {subtitle}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        >
          <Image
            style={{
              width: 35,
              height: 35,
            }}
            source={assets.go_in}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
