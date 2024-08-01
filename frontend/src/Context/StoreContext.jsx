import { createContext } from "react"
import { storeItems } from "../assets/storeData";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = { storeItems }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

