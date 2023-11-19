import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import React, { useState } from "react";
import ItemList from "../components/ItemList";

import { SafeAreaView } from "react-native";
import { SegmentedButtons } from "react-native-paper";

import {
  aulasPassadasPorMesAno,
  aulasFuturasPorMesAno,
} from "../utils/getClassesDate";

const NextClasses = () => {
  return (
    <View className="my-2 ml-2">
      <ItemList data={Object.entries(aulasFuturasPorMesAno)} />
    </View>
  );
};

const PreviousClasses = () => {
  return (
    <View className="my-2 ml-2">
      <ItemList data={Object.entries(aulasPassadasPorMesAno)} />
    </View>
  );
};

// export default function Schedule() {
//   const Tab = createMaterialTopTabNavigator();
//   const [value, setValue] = useState("next");

//   return (
//     <SafeAreaView className="flex-1 my-6">
//       <SegmentedButtons
//         value={value}
//         onValueChange={setValue}
//         className="mx-4"
//         buttons={[
//           {
//             value: "next",
//             label: "Próximas Aulas",
//             icon: "clock-outline",
//           },
//           {
//             value: "previous",
//             label: "Aulas anteriores",
//             icon: "calendar-clock",
//           },
//         ]}
//       />
//       {value === "next" ? <NextClasses /> : <PreviousClasses />}
//     </SafeAreaView>
//   );
// }

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
