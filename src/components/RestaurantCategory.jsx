import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex(!showItems);
    };
    return (
        <div className="accordion my-4 bg-green-50 shadow-lg p-4">
            <div className="acc-title flex justify-between cursor-pointer" onClick={handleClick}>
                <h2 className="title text-lg font-bold">
                    {data.title} ({data.itemCards.length})
                </h2>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;
