import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                        setListOfRestaurants(filteredList)
                        // setListOfRestaurants([]); // to make the list of restaurants empty on click of button just pass an empty array as a default;
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body
