import { createContext } from "react";

const StoreContext = createContext(
    {
        token: null, 
        setToken: () => {},
        activeUser: {},
        setActiveUser: () => {}
    }
);

export default StoreContext; 
