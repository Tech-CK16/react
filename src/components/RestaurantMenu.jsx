import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const category = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <>
            <div className="res-info w-[60%] m-auto flex flex-col justify-center items-center">
                <h1 className="flex flex-row w-fit text-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    {name}{" "}
                    <span className="w-fit h-fit ml-2 tracking-widest flex justify-center items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-300">
                        {avgRating} ⭐
                    </span>
                </h1>
                <h4 className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </h4>
            </div>
            <div className="res-menu w-[60%] m-auto">
                <h2 className="text-xl font-bold">Menu</h2>
                {category.map((category, index) => (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </>
    );
};
export default RestaurantMenu;
