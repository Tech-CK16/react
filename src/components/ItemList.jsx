import { CDN_RES_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map(list => (
                <div
                    key={list.card.info.id}
                    className="itemList flex flex-row justify-between items-center border rounded-md p-3 mt-3 bg-white shadow-md"
                >
                    <div className="itemData w-[80%]">
                        <div className="name font-bold">
                            {list?.card?.info?.name} <span className="isVeg">{list?.card?.info?.isVeg === 1 ? " (🥕)" : " (🍗)"}</span>
                        </div>
                        <div className="price font-bold">
                            <span>&#8377;</span>
                            {list?.card?.info?.defaultPrice ? list?.card?.info?.defaultPrice / 100 : list?.card?.info?.price / 100}
                        </div>
                        <div className="rating mt-2">
                            {list?.card?.info?.ratings?.aggregatedRating?.rating != null
                                ? "⭐" + list?.card?.info?.ratings?.aggregatedRating?.rating
                                : ""}
                        </div>
                        <div className="description text-xs mt-2">{list?.card?.info?.description}</div>
                    </div>
                    <div className="itemImg w-[10%]">
                        <img className="rounded-md" src={CDN_RES_URL + list?.card?.info?.imageId} alt={list?.card?.info?.name} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ItemList;
