import { createContext, useEffect, useState } from "react"
import { storeItems } from "../assets/storeData";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    const url = "http://localhost:3000"
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");

    const getTotalCartAmount = () => {
        let totalCartAmount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                let itemInStore = storeItems.find((item) => item._id === itemId);
                totalCartAmount += itemInStore.price * cartItems[itemId];
            }
        }
        return totalCartAmount;
    }

    const addCartItem = (_id) => {
        if (!cartItems[_id]) {
            // console.log(_id);
            setCartItems(prev => ({ ...prev, [_id]: 1 }));
        } else {
            console.log("hello from else");
            setCartItems(prev => ({ ...prev, [_id]: prev[_id] + 1 }));
        }
    }

    const removeCartItems = (_id) => {
        setCartItems(prev => ({ ...prev, [_id]: prev[_id] - 1 }));
        console.log("removing", cartItems);
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

