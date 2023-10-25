import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import React from "react";

const NextClasses = () => {
  return (
    <View>
      <Text>Schedule</Text>
    </View>
  );
};

const PreviousClasses = () => {
  return (
    <View>
      <Text>Schedule2</Text>
    </View>
  );
};

export default function Schedule() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Próximas Aulas"
      screenOptions={{
        tabBarActiveTintColor: "#da842f",
        tabBarInactiveTintColor: "#808080",
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIndicatorStyle: {
          backgroundColor: "#da842f",
        },
      }}
    >
      <Tab.Screen name="Próximas Aulas" component={NextClasses} />
      <Tab.Screen name="Aulas Anteriores" component={PreviousClasses} />
    </Tab.Navigator>
  );
}
