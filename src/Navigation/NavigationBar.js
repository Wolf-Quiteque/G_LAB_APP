import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

import ProfileScreen from "./../Screens/ProfileScreen";
import FeedScreen from "../Screens/FeedScreen";
import MessageScreen from "../Screens/MessageScreen";
import NewsScreen from "../Screens/NewsScreen";

import { KeyboardAvoidingView } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={1} // adjust this value based on your keyboard height
    >
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Perfil") {
                  iconName = "account-circle";
                  return (
                    <MaterialCommunityIcons
                      name={iconName}
                      size={size}
                      color={color}
                    />
                  );
                } else if (route.name === "Feed") {
                  iconName = "home";
                  return (
                    <AntDesign name={iconName} size={size} color={color} />
                  );
                } else if (route.name === "Mensagem") {
                  iconName = "message1";
                  return (
                    <AntDesign name={iconName} size={size} color={color} />
                  );
                } else if (route.name === "News") {
                  iconName = "filetext1";
                  return (
                    <AntDesign name={iconName} size={size} color={color} />
                  );
                }

                // You can return any component that you like here!
                return null;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Feed" component={FeedScreen} />

            <Tab.Screen
              options={{
                title: "Chat",
              }}
              // options={{
              //   tabBarStyle: { display: "none" },
              //   title: "G - CHAT",
              //   headerLeft: () => (
              //     <MaterialIcons
              //       name="arrow-back"
              //       size={24}
              //       color="black"
              //       onPress={() => navigation.goBack()}
              //     />
              //   ),
              // }}
              name="Mensagem"
              component={MessageScreen}
            />
            <Tab.Screen name="Perfil" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </KeyboardAvoidingView>
  );
};

export default Navigation;
