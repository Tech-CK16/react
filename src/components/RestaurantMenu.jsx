import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <>
            <div className="res-info">
                <h1>{name}</h1>
                <h4>
                    {cuisines.join(", ")} - {costForTwoMessage}
                </h4>
                <h4>{avgRating} stars</h4>
            </div>
            <div className="res-menu">
                <h2>Menu</h2>
                <ul>
                    {itemCards.map(item => (
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
