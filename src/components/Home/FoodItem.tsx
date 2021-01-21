import React, { useContext } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageSourcePropType,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Item } from "../../types/Item";
import { soupContext } from "../../context/SoupContext";

interface FoodItemProps {
    item: Item;
}

export const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
    const { setFavorites } = useContext(soupContext);
    const pressHandler = () => {
        setFavorites((prevState: Array<Item>) => {
            if (prevState.indexOf(item) === -1) {
                return [...prevState, item];
            } else {
                return prevState.filter(s => s.itemName !== item.itemName);
            }
        });
        item.isFavorite = !item.isFavorite;
    };

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

            <Ionicons
                name={item.isFavorite ? "ios-heart" : "ios-heart-outline"}
                size={16}
                color='#ff7214'
                style={{ position: "absolute", bottom: 10, right: 15 }}
                onPress={pressHandler}
            />
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
