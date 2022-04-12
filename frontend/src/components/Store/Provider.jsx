import React from "react";
import Context from './Context';
import useStorage from "utils/useStorage";

const StoreProvider = ({ children }) => {
    const [token, setToken] = useStorage('token');
    const [activeUser, setActiveUser] = useStorage('activeUser')

    return (
        <Context.Provider
            value={{
                token, 
                setToken,
                activeUser,
                setActiveUser
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;