import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Nav: React.FC = () => {
    return (
        <View style={styles.nav}>
            <TouchableOpacity
                style={styles.burger}
                activeOpacity={0.5}
                onPress={() => alert("button pressed")}
            >
                <View style={styles.top}></View>
                <View style={styles.bottom}></View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        paddingTop: 80,
        paddingHorizontal: 30,
    },

    burger: {
        position: "relative",
        height: 20,
        maxWidth: 30,
    },

    top: {
        position: "absolute",
        backgroundColor: "black",
        top: 0,
        width: "100%",
        height: 2,
        left: 0,
    },

    bottom: {
        position: "absolute",
        backgroundColor: "black",
        bottom: 8,
        right: 0,
        width: "80%",
        height: 2,
    },
});
