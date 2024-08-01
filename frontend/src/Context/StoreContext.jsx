import { createContext, useEffect, useState } from "react"
import { storeItems } from "../assets/storeData";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])
    
    
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
        removeCartItems
     }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

