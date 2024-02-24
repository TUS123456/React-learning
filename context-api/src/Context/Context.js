import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
    const [userdata, setuserdata] = useState([]);

    return (
        <UserContext.Provider value={{ userdata, setuserdata }}>
            {props.children}
        </UserContext.Provider>
    );
};
