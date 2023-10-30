import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import lista from "../libs/lista.json";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Home</Text>
      <Button icon="details" mode="outlined" onPress={() => console.log(lista)}>
        Press me
      </Button>
    </View>
  );
}
