import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { SegmentedButtons } from "react-native-paper";

export default function Invoices() {
  const [value, setValue] = useState("next");

  return (
    <SafeAreaView className="flex-1 mx-6 my-6">
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: "next",
            label: "Próximas Aulas",
            icon: "clock-outline",
          },
          {
            value: "previous",
            label: "Aulas anteriores",
            icon: "calendar-clock",
          },
        ]}
      />
    </SafeAreaView>
  );
}
