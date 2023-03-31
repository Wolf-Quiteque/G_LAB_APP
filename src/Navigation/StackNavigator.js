import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import NavigationBar from "./NavigationBar";
import ProfileScreen from "../screens/ProfileScreen";
import FeedScreen from "../screens/FeedScreen";
import MessageScreen from "../screens/MessageScreen";
import NewsScreen from "../screens/NewsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NavigationBar} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Noticia" component={NewsScreen} />

        <Stack.Screen
          name="Message"
          options={{ headerTitle: "Test", headerShown: true }}
          component={MessageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
