import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenuItems, setResMenuItems] = useState(null);
    const { resId } = useParams();

    console.log(resInfo);
    console.log(resMenuItems);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        console.log(jsonData);
        setResInfo(jsonData?.data?.cards[2]?.card?.card?.info);
        setResMenuItems(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    };

    if (resInfo === null) return <Shimmer />;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwoMessage } = resInfo ? resInfo : null;
    const { deliveryTime } = resInfo?.sla ? resInfo?.sla : null;

    return (
        <>
            <div className="res-info">
                <h1>{name}</h1>
                <h4>
                    {cuisines.join(", ")} - {costForTwoMessage}
                </h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
            <div className="res-menu">
                <h2>Menu</h2>
                <ul>
                    {resMenuItems.map(item => (
                        <li key={item?.card?.info.id}>
                            {item?.card?.info?.name} - <span style={{ fontFamily: "Arial" }}>&#8377;</span>
                            {item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}{" "}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default RestaurantMenu;
