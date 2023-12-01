import { View, Text, TouchableOpacity, Platform } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as IntentLauncherAndroid from "expo-intent-launcher";
import links from "../libs/links.json";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { FilePdf, CloudArrowDown } from "phosphor-react-native";

export default function Material() {
  const material = links;

  const downloadFile = async (url, nomeArquivo, arquivo) => {
    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        url,
        FileSystem.documentDirectory + `${nomeArquivo}.${arquivo}` // Caminho onde o arquivo temporário será armazenado
      );

      const { uri } = await downloadResumable.downloadAsync();

      if (Platform.OS === "android") {
        const canShare = await Sharing.isAvailableAsync();

        if (canShare) {
          await Sharing.shareAsync(uri);
          console.log("Arquivo compartilhado com sucesso");
        } else {
          console.error("Compartilhamento não suportado neste dispositivo");
        }
      } else if (Platform.OS === "ios") {
        const canShare = await Sharing.isAvailableAsync();

        if (canShare) {
          await Sharing.shareAsync(uri);
          console.log("Arquivo compartilhado com sucesso");
        } else {
          console.error("Compartilhamento não suportado neste dispositivo");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer o download:", error);
    }
  };
  return (
    <View>
      <FlatList
        data={material}
        renderItem={({ item }) => {
          return (
            <View className="my-3 mx-3 flex flex-row justify-between items-center h-12">
              <View className="flex flex-row items-center space-x-2 ">
                <FilePdf size={35} weight="light" />
                <View className="flex flex-col ">
                  <Text className="text-base flex-wrap max-w-[235px]">
                    {item?.nome}
                  </Text>
                  <Text className="text-slate-600 capitalize">
                    {item?.tipo}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() =>
                  downloadFile(item?.link, item?.nome, item?.arquivo)
                }
              >
                <CloudArrowDown size={35} weight="light" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
