import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteScreen } from "./FavoriteScreen";
import { HomeScreen } from "./HomeScreen";

export const MainScreen: React.FC = () => {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: "#ff7214",
                inactiveTintColor: "#d4d4d4",
            }}
        >
            <Tabs.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='home' color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name='Favorites'
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='heart' color={color} size={24} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};
