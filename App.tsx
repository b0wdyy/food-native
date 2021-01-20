import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { MainScreen } from "./src/screens/MainScreen";
import { Nav } from "./src/components/Nav";
import { Soup } from "./src/context/SoupContext";

export default function App() {
    const StackNavigator = createStackNavigator();
    return (
        <Soup>
            <Nav />
            <NavigationContainer>
                <StackNavigator.Navigator headerMode='none'>
                    <StackNavigator.Screen name='main' component={MainScreen} />
                </StackNavigator.Navigator>
            </NavigationContainer>
        </Soup>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
