export const COLORS = {
  // primary: "#001F2D",
  primary: "#260259",
  // secondary: "#4D626C",
  // secondary: "#FCF1DA",
  secondary: "#BEB4CE",
  light: "#FCF1DA",

  white: "#FFF",
  gray: "#74858C",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  extraExtraLarge: 32,
};

export const FONTS = {
  bold: "BarlowBold",
  semiBold: "BarlowSemiBold",
  medium: "BarlowMedium",
  regular: "BarlowRegular",
  light: "BarlowLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
