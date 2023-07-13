import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({children}){
    const [isLoggedin,setIsLoggedin] = useState(false);

    const [user,setUser] = useState("Admin");

    return(
        <UserContext.Provider value={{isLoggedin,setIsLoggedin,user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

export const useUser = () => useContext(UserContext);