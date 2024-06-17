import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="cart text-center m-5 p-10">
            <h1 className="text-xl font-bold">Cart</h1>
            <div className="cartItems w-[60%] m-auto">
                <button className="p-2 m-2 bg-black text-white rounded" onClick={handleClearCart}>
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1>Cart is empty, Add items to the cart!!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
