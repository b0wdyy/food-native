import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FoodItem } from "../components/Home/FoodItem";
import { soupContext } from "../context/SoupContext";
import { Category } from "../types/Category";
import { Item } from "../types/Item";

export const HomeScreen: React.FC = () => {
    const { state, activeCategoryIndex, setActiveCategoryIndex } = useContext(
        soupContext,
    );
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.title}>CATEGORIES</Text>
                <ScrollView horizontal={true} style={{ marginBottom: 10 }}>
                    {state.categories.map(
                        (categorie: Category, index: number) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setActiveCategoryIndex(index)}
                                key={index}
                            >
                                {categorie.name ===
                                state.categories[activeCategoryIndex].name ? (
                                    <Text style={styles.text}>
                                        {categorie.name}
                                    </Text>
                                ) : (
                                    <Text
                                        style={{ ...styles.text, opacity: 0.6 }}
                                    >
                                        {categorie.name}
                                    </Text>
                                )}
                            </TouchableOpacity>
                        ),
                    )}
                </ScrollView>
            </View>

            <ScrollView>
                {state.categories[activeCategoryIndex].items &&
                    state.categories[
                        activeCategoryIndex
                    ].items.map((item: Item, idx) => (
                        <FoodItem item={item} key={idx} />
                    ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: "white",
    },

    title: {
        fontWeight: "bold",
        fontSize: 22,
    },

    text: {
        marginRight: 20,
        marginVertical: 10,
    },

    active: {
        opacity: 1,
    },
});
