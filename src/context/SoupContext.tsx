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
                },
                {
                    itemName: "Chicken noodle soup",
                    itemPicture: require("../../assets/images/Chicken-Noodle-Soup-Fifteen-Spatulas-2.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    itemName: "Vegetable soup",
                    itemPicture: require("../../assets/images/goodvegetablesoup_73412_16x9.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
                {
                    itemName: "Homemade vegetable soup",
                    itemPicture: require("../../assets/images/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"),
                    itemDescription:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                },
            ],
        },
        {
            name: "Burgers",
        },
        {
            name: "Desserts",
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
