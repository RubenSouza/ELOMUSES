import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  User,
  CalendarCheck,
  ClipboardText,
  CurrencyDollarSimple,
  ClockCounterClockwise,
  Calendar,
  Microphone,
  Gear,
} from "phosphor-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Menu() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 ">
      {/* User Header */}
      <View className="flex flex-row items-center my-10 mx-5 space-x-2">
        <View className="border-4 border-slate-200 drop-shadow-xl rounded-md p-1">
          <User size={65} className="text-slate-600" />
        </View>
        <View>
          <Text className="font-semibold text-lg">Thays Oliveira</Text>
          <Text className="uppercase text-sm text-slate-800">Elo Muses</Text>
          <Text className="text-xs text-slate-500">Aulas de Música</Text>
        </View>
      </View>
      {/* Clases Menu */}
      <View className="flex flex-col space-y-2">
        <TouchableOpacity
          className="flex flex-row items-center my-2 mx-5 space-x-2 "
          onPress={() => navigation.navigate("Agenda")}
        >
          <CalendarCheck size={25} className="text-blue-700" />
          <Text>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center my-2 mx-5 space-x-2"
          onPress={() => navigation.navigate("Material Didático")}
        >
          <ClipboardText size={25} className="text-blue-700" />
          <Text>Material Didático</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center my-2 mx-5 space-x-2"
          onPress={() => navigation.navigate("Aulas a Repor")}
        >
          <ClockCounterClockwise size={25} className="text-blue-700" />
          <Text>Aulas a Repor</Text>
        </TouchableOpacity>
      </View>
      <Text className="h-[1px] w-[89%] mx-auto bg-slate-300 my-2" />
      {/* Escola Menu */}
      <View className="flex flex-col space-y-2">
        {/* <Text className="mx-5 ">Escola</Text> */}
        <TouchableOpacity
          className="flex flex-row items-center my-2 mx-5 space-x-2"
          onPress={() => navigation.navigate("Faturas")}
        >
          <CurrencyDollarSimple size={25} className="text-yellow-700" />
          <Text>Faturas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center my-2 mx-5 space-x-2"
          onPress={() => navigation.navigate("Calendário Escolar")}
        >
          <Calendar size={25} className="text-yellow-700" />
          <Text>Calendário Escolar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row items-center my-2 mx-5 space-x-2"
          onPress={() => navigation.navigate("Metrônomo")}
        >
          <Microphone size={25} className="text-yellow-700" />
          <Text>Metrônomo</Text>
        </TouchableOpacity>
      </View>
      <Text className="h-[1px] w-[89%] mx-auto bg-slate-300 my-2" />
      {/* Config Menu */}
      <TouchableOpacity onPress={() => navigation.navigate("Configurações")}>
        <View className="flex flex-row items-center my-2 mx-5 space-x-2">
          <Gear size={25} className="text-slate-700" />
          <Text>Configurações</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
