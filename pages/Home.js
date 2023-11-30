import { View, Text, FlatList } from "react-native";
import React from "react";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [selectedNotification, setSelectedNotification] = React.useState(null);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  };

  const onNotificationPress = notification => {
    setSelectedNotification(notification);
    showModal();
  };

  const notifications = [
    {
      title: "Aula de violão amanhã",
      content:
        "Esta semana a aula de violão será na quarta-feira, dia 24/04/2022, às 14h. Não esqueça de trazer seu violão e o material didático. Pois por conta do feriado não haverá aua de reposição na quinta",
      date: "24/04/2022",
    },
    {
      title: "My last night's dream",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in",
      date: "24/04/2022",
    },
    {
      title: "My last night's dream",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in",
      date: "24/04/2022",
    },
    {
      title: "My last night's dream",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in",
      date: "24/04/2022",
    },
    {
      title: "My last night's dream",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in",
      date: "24/04/2022",
    },
    {
      title: "My last night's dream",
      content:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in",
      date: "24/04/2022",
    },
  ];

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          {selectedNotification && (
            <View className="">
              <View className="flex flex-row justify-between">
                <Text className="font-bold">{selectedNotification?.title}</Text>
                <Text className="text-xs">{selectedNotification?.date}</Text>
              </View>
              <View className="flex mt-1 ">
                <Text className="truncate ...">
                  {selectedNotification?.content}
                </Text>
              </View>
            </View>
          )}
        </Modal>
      </Portal>
      <View className="flex-1 my-2 mx-5 flex items-center">
        {/* <Text className="text-lg font-medium">Quadro de avisos</Text> */}
        <FlatList
          data={notifications}
          keyExtractor={(item, i) => i.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View className="mt-2">
              <TouchableOpacity onPress={() => onNotificationPress(item)}>
                <View
                  className="border border-slate-300  p-4 rounded-lg 
                 h-[110px]"
                >
                  <View className="h-full">
                    <View className="flex flex-row justify-between">
                      <Text className="font-bold">{item?.title}</Text>
                      <Text className="text-xs">{item?.date}</Text>
                    </View>
                    <View className="flex mt-1 h-[55px]">
                      <Text numberOfLines={3}>{item?.content}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </PaperProvider>
  );
}
