import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>
      <Button
        icon="details"
        mode="outlined"
        onPress={() => console.log("pressed")}
      >
        Press me
      </Button>
    </View>
  );
}
