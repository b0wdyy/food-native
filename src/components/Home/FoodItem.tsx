import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageSourcePropType,
    Dimensions,
} from "react-native";
import { Item } from "../../types/Item";

interface FoodItemProps {
    item: Item;
}

export const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
    return (
        <View style={styles.card}>
            <Image
                source={item.itemPicture as ImageSourcePropType}
                style={{
                    width: 120,
                    maxHeight: "100%",
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                }}
            />

            <View
                style={{
                    justifyContent: "center",
                    paddingHorizontal: 10,
                    flex: 1,
                }}
            >
                <Text style={styles.title}>{item.itemName}</Text>
                <Text style={{ fontSize: 12 }}>{item.itemDescription}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        marginBottom: 40,
        backgroundColor: "white",
        borderRadius: 20,
        height: 140,
        width: Dimensions.get("screen").width / 1.2,

        shadowColor: "#ffde96",
        shadowOffset: {
            width: 3,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,

        elevation: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
});
