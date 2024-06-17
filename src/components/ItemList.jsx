import { useDispatch } from "react-redux";
import { CDN_RES_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = list => {
        // dispatch an action
        dispatch(addItem(list));
    };
    return (
        <>
            {items.map(list => (
                <div
                    key={list.card.info.id}
                    className="itemList flex flex-row justify-between items-center border rounded-md p-3 mt-3 bg-white shadow-md w-full"
                >
                    <div className="itemData w-[80%]">
                        <div className="name font-bold text-left">
                            {list?.card?.info?.name} <span className="isVeg">{list?.card?.info?.isVeg === 1 ? " (🥕)" : " (🍗)"}</span>
                        </div>
                        <div className="price font-bold text-left">
                            <span>&#8377;</span>
                            {list?.card?.info?.defaultPrice ? list?.card?.info?.defaultPrice / 100 : list?.card?.info?.price / 100}
                        </div>
                        <div className="rating mt-2 text-left">
                            {list?.card?.info?.ratings?.aggregatedRating?.rating != null
                                ? "⭐" + list?.card?.info?.ratings?.aggregatedRating?.rating
                                : ""}
                        </div>
                        <div className="description text-xs mt-2 text-left">{list?.card?.info?.description}</div>
                    </div>
                    <div className="itemImg w-[10%] relative">
                        <img className="rounded-md" src={CDN_RES_URL + list?.card?.info?.imageId} alt={list?.card?.info?.name} />
                        <button
                            className="absolute text-white border border-green-500 bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1 text-center bottom-[-5px] left-[20%]"
                            onClick={() => handleAddItem(list)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ItemList;
