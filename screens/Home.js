import { useState } from "react";
import { Image, View, SafeArea, SafeAreaView, FlatList } from "react-native";

import { assets, COLORS, NFTData, SIZES } from "../constants";
import { Card, HomeHeader, FocusedStatusBar, Menu } from "../components";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  // const handleSearch = (value) => {
  //   if (!value.length) return setNftData(NFTData);

  //   const filteredData = NFTData.filter((item) =>
  //     item.name.toLowerCase().includes(value.toLowerCase())
  //   );

  //   if (filteredData.length) {
  //     setNftData(filteredData);
  //   } else {
  //     setNftData(NFTData);
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ zIndex: 0, display: "flex" }}>
        <Card
          data={nftData}
          title={"Porozmawiajmy o faktach..."}
          subtitle={"jest twoją ulubioną bluzką"}
          image={assets.womanshirt_2}
        />
        <Card
          data={nftData}
          title={"Czas na wiosenne porządki..."}
          subtitle={"jest nieużywana. Może warto ją sprzedać?"}
          image={assets.womanshirt_4}
        />
      </View>

      <Menu menuStyle={assets.menu_roof} />
    </SafeAreaView>
  );
};

export default Home;
