import { View, Text, FlatList } from "react-native";
import { Chat } from "phosphor-react-native";
import moment from "moment";
import React from "react";

export default function ItemList({ data }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        const [mes, ano] = item[0].split(" ");
        return (
          <View className="space-y-2 w-full">
            <Text className="capitalize m-auto text-slate-400 text-sm">{`${mes} de ${ano}`}</Text>
            {item[1].map((aula, i) => (
              <View key={i}>
                <View className="flex flex-row items-center">
                  <View
                    className={`bg-slate-600 w-2 h-2 rounded-full mx-2 ${
                      aula?.status === "realizada"
                        ? "bg-green-600"
                        : aula?.status === "naoRealizada"
                        ? "bg-red-600"
                        : null
                    }`}
                  />
                  <Text className="text-base text-slate-500">
                    {moment(aula?.data).format("DD/MM")} às {aula?.hora}
                  </Text>
                </View>
                <View className="flex flex-col my-1">
                  <View className="flex flex-row space-y-2">
                    <View
                      className={`w-[2px] bg-slate-600 mx-[10px] ${
                        aula?.status === "realizada"
                          ? "bg-green-600"
                          : aula?.status === "naoRealizada"
                          ? "bg-red-600"
                          : "h-20"
                      }`}
                    />
                    <View className="flex flex-col space-y-2">
                      <Text className="text-[15px]">
                        {aula?.professor} - {aula?.nome}
                      </Text>
                      <Text
                        className={`capitalize text-slate-600 ${
                          aula?.tipo == "reposição"
                            ? "text-yellow-700 font-bold"
                            : null
                        }`}
                      >
                        {aula?.tipo}
                      </Text>
                      {aula?.status && (
                        <View className="flex items-start my-4">
                          <Text
                            className={`border-[1.5px] rounded-xl px-2 py-1
                                text-xs font-semibold m-0 ${
                                  aula?.status === "realizada"
                                    ? "border-green-700 text-green-700"
                                    : aula?.status === "naoRealizada"
                                    ? "border-red-700 text-red-700"
                                    : null
                                }`}
                          >
                            {aula?.status === "realizada"
                              ? "Aula realizada"
                              : aula?.status === "naoRealizada"
                              ? "Aula não realizada"
                              : null}
                          </Text>
                        </View>
                      )}
                      {aula?.obs && (
                        <View
                          className="flex flex-row items-center space-x-1  
                              max-w-[250px] my-4"
                        >
                          <Chat size={20} />
                          <Text className="text-xs text-slate-600 flex-wrap">
                            {aula?.obs}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        );
      }}
    />
  );
}
