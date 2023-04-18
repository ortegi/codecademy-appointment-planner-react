import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    
    const initialState = [
        {name: 'Alberto', phone: 12113123, email:"alberto.pork@porks.com"}
    ]

    const [list, setList] = useState(initialState)

    return(
        <UserContext.Provider value={{list, setList}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;

export const useUserContext = () => useContext(UserContext)