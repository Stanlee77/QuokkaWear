import * as React from "react";

import { Button, Text, View } from "react-native";

const MyButton = ({ handle }) => {
  return <Button title="Go to Details!" onPress={handle} />;
};

export default MyButton;
