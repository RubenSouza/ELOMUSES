import { View, Text } from "react-native";
import { Divider } from "react-native-paper";
import React from "react";

export default function NotificationItem({ title, date, content }) {
  return (
    <View>
      <View className="flex flex-row items-center h-[110px] ">
        <View className="">
          <View className="flex flex-row items-center space-x-3">
            <View className="rounded-full h-4 w-4 bg-blue-400 mt-1" />
            <Text className="text-base font-medium">{title}</Text>
          </View>
          <View className="mx-7">
            <Text>{content}</Text>
            <Text>{date}</Text>
          </View>
        </View>
      </View>
      <Divider className="" />
    </View>
  );
}
