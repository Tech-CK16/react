import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

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
            <div className="filter-container">
                <div className="className">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Enter the Value..."
                        value={searchText}
                        onChange={e => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={handleTopRated}>
                    Top Rated Restaurants
                </button>
                <button className="reset-btn" onClick={handleReset}>
                    Reset
                </button>
            </div>
            <div className="restro-container">
                {listOfRestaurants.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
