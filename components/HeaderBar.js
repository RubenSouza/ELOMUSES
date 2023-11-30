import * as React from "react";
import { Text } from "react-native";
import { Appbar } from "react-native-paper";

export default function HeaderBar({ navigation, route }) {
  const name = route.name;

  const _handleNotifications = () => navigation.navigate("Notificações");

  const _handleMore = () => navigation.openDrawer();

  return (
    <Appbar.Header mode="small">
      <Appbar.Action icon="menu" onPress={_handleMore} />
      <Appbar.Content
        title={
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {name}
          </Text>
        }
        style={{
          width: "30px",
        }}
      />
      <Appbar.Action icon="bell-outline" onPress={_handleNotifications} />
      <Appbar.Action
        icon="account"
        onPress={() => console.log("Profile Pressed")}
      />
    </Appbar.Header>
  );
}
