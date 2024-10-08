import { createContext, useEffect, useState } from "react"
import axios from "axios";
import { toast } from 'react-toastify';
// import { storeItems } from "../assets/storeData";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:3000"
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [storeItems, setStoreItems] = useState([]);

    const loadData = async () => {
        const response = await axios.get(url + "/api/product/list");
        setStoreItems(response.data.productData);

        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            await loadCartItems(localStorage.getItem("token"));
        }
        // console.log(token);

    }

    const loadCartItems = async (tokenString) => {
        const response = await axios.post(url + "/api/cart/list", {}, { headers: { token: tokenString } });
        // console.log(response.data);

        setCartItems(response.data.cartItems);
    }

    useEffect(() => {

        loadData();
    }, [])


    const getTotalCartAmount = () => {
        let totalCartAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInStore = storeItems.find((item) => item._id === itemId);
                // console.log(totalCartAmount);

                totalCartAmount += itemInStore.price * cartItems[itemId];
            }
        }
        return totalCartAmount;
    }

    const addCartItem = async (_id) => {
        if (!cartItems[_id]) {
            // console.log(_id);
            setCartItems(prev => ({ ...prev, [_id]: 1 }));
        } else {
            console.log("hello from else");
            setCartItems(prev => ({ ...prev, [_id]: prev[_id] + 1 }));
        }

        if (token) {
            const response = await axios.post(url + "/api/cart/add", { itemId: _id }, { headers: { token } });

            if (!response.data.success)
                toast.error(response.data.message);
        }
    }

    const removeCartItems = async (_id) => {
        setCartItems(prev => ({ ...prev, [_id]: prev[_id] - 1 }));
        console.log("removing", cartItems);

        if (token) {
            const response = await axios.post(url + "/api/cart/remove", { itemId: _id }, { headers: { token } });

            if (!response.data.success)
                toast.error(response.data.message);
        }
    }

    const contextValue = {
        storeItems,
        cartItems,
        setCartItems,
        addCartItem,
        removeCartItems,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

