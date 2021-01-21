import React, { createContext, useState } from "react";

// @ts-ignore
export const soupContext = createContext();

const state = {
    categories: [
        {
            name: "Soup",
            items: [
                {
                    itemName: "Butternut squash soup",
                    itemPicture: require("../../assets/images/butternut-squash-soup-fb-ig3.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
                {
                    itemName: "Chicken noodle soup",
                    itemPicture: require("../../assets/images/Chicken-Noodle-Soup-Fifteen-Spatulas-2.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
                {
                    itemName: "Vegetable soup",
                    itemPicture: require("../../assets/images/goodvegetablesoup_73412_16x9.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
                {
                    itemName: "Homemade vegetable soup",
                    itemPicture: require("../../assets/images/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
            ],
        },
        {
            name: "Burgers",
            items: [
                {
                    itemName: "Italiaanse burger",
                    itemPicture: require("../../assets/images/italiaanse-burger.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
                {
                    itemName: "Double steakhouse",
                    itemPicture: require("../../assets/images/double_steakhouse_burger-feat.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
            ],
        },
        {
            name: "Desserts",
            items: [
                {
                    itemName: "Mascarpone creme",
                    itemPicture: require("../../assets/images/mascarpone-creme-met-kokos.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
                {
                    itemName: "Chocolade dessert",
                    itemPicture: require("../../assets/images/chocolade-dessert.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
                {
                    itemName: "Cappuccinomousse",
                    itemPicture: require("../../assets/images/img_065558_890x594_JPG.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    isFavorite: false,
                },
            ],
        },
    ],
};

export const Soup: React.FC = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    return (
        <soupContext.Provider
            value={{
                favorites,
                setFavorites,
                state,
                activeCategoryIndex,
                setActiveCategoryIndex,
            }}
        >
            {children}
        </soupContext.Provider>
    );
};
