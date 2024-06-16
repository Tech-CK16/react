import RestaurantCard, { isOpenRes } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantIsOpen = isOpenRes(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setOriginalListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const handleSearch = () => {
        const filteredRestaurant = originalListOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setListOfRestaurants(filteredRestaurant);
    };

    const handleTopRated = () => {
        const filteredList = originalListOfRestaurants.filter(res => res.info.avgRating > 4.5);
        setListOfRestaurants(filteredList);
    };

    const handleReset = () => {
        setListOfRestaurants(originalListOfRestaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>;

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter-container flex justify-center items-center mb-5">
                <div className="search mr-4">
                    <input
                        type="text"
                        className="search-box shadow appearance-none border rounded mr-2 py-1 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
                        placeholder="Search Restaurant..."
                        value={searchText}
                        onChange={e => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn bg-blue-500 hover:bg-blue-700 text-white py-1 font-normal px-4 rounded" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <button className="filter-btn mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded" onClick={handleTopRated}>
                    Top Rated Restaurants
                </button>
                <button className="reset-btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded" onClick={handleReset}>
                    Reset
                </button>
            </div>
            <div className="restro-container flex flex-wrap justify-center gap-4">
                {listOfRestaurants.map(restaurant => (
                    <Link
                        className="res-card w-60 rounded overflow-hidden shadow-lg"
                        key={restaurant.info.id}
                        to={"/restaurants/" + restaurant.info.id}
                    >
                        {restaurant.info.isOpen ? <RestaurantIsOpen resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
