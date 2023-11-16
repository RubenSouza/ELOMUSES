import { View, Text } from "react-native";
import React from "react";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View className="">
            <View className="flex flex-row justify-between">
              <Text className="font-bold">My last night`s dream</Text>
              <Text className="text-xs">24/04/2022</Text>
            </View>
            <View className="flex mt-1 ">
              <Text className="truncate ...">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. duis aute irure dolor
                in
              </Text>
            </View>
          </View>
        </Modal>
      </Portal>
      <View className="flex-1 my-14 mx-5 flex items-center">
        <Text className="font-bold text-xl mb-6">Quadro de avisos</Text>
        <View className="space-y-4">
          <TouchableOpacity onPress={showModal}>
            <View className="border border-slate-300  p-4 rounded-lg w-[355px] h-[110px]">
              <View className="h-full">
                <View className="flex flex-row justify-between">
                  <Text className="font-bold">My last night`s dream</Text>
                  <Text className="text-xs">24/04/2022</Text>
                </View>
                <View className="flex mt-1 h-[55px]">
                  <Text className="truncate ...">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    duis aute irure dolor in
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </PaperProvider>
  );
}

// pb-4 pt-2
