import React from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

import UserData from "../user_data/clothes.json"

import {Shoes_1} from "../user_data/assets.js"

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View>
      <FlatList
        data={UserData}
        renderItem={({item}) => (
          <View>
            <Text>
              these are {" "}
              {item.name}
              </Text>
              <Image
              style={{
                width: 200,
                height: 100,
              }}
              source={Shoes_1}
              // source={ClothesImages.name}
            />
          </View>
        )}
        keyExtractor={(item)=> item.id}
      />
    </View>
  );
}

export default FlatListBasics;