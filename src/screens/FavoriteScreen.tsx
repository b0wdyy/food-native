import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { soupContext } from "../context/SoupContext";

export const FavoriteScreen: React.FC = ({ navigation }) => {
    // @ts-ignore
    const { favorites } = useContext(soupContext);
    return (
        <View style={styles.wrapper}>
            {favorites.length ? (
                <Text>Goed pik</Text>
            ) : (
                <>
                    <Text>Ja je hebt nog niks</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text>Ga naar home</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
});
