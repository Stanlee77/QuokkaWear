import * as React from "react";

import { Button } from "react-native";

const MyButton = ({ handlePress }) => {
  return <Button title="This is menuButton!Details!" onPress={handlePress} />;
};

export default MyButton;
