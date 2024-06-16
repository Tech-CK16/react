import { CDN_RES_URL } from "../utils/constants";

const RestaurantCard = props => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div className="res-card">
            <img className="res-logo w-full h-40 object-cover" alt={name} src={CDN_RES_URL + cloudinaryImageId} />
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{name}</h3>
                <h4 className="text-gray-700 text-base">{cuisines.join(", ")}</h4>
                <h4 className="text-gray-700 text-base">{avgRating} stars</h4>
                <h4 className="text-gray-700 text-base">{costForTwo}</h4>
                <h4 className="text-gray-700 text-base">{deliveryTime} mins</h4>
            </div>
        </div>
    );
};

// example for an higher order component
export const isOpenRes = RestaurantCard => {
    return props => {
        return (
            <div className="isOpen relative">
                <label className="absolute right-[5px] top-[5px] bg-green-100 text-green-800 text-sm font-medium px-1 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    🟢 Open
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
