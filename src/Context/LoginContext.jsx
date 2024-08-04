import { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast'

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [logedInUser, setLogedInUser] = useState();
    const [signedUpUser, setSignedUpUser] = useState();
    const [isUserLogedIn, setIsUserLogedIn] = useState(false);

    // let signUp = (username, password) => {
    //     if (!username && !password) {
    //         setSignedUpUser(username);
    //     }

    // }

    let logOut = () => {
        setLogedInUser();
        setIsUserLogedIn(false)

        toast.error("User loged out");

    }
    let logIn = (username, password) => {
        if (username == "admin" && password == "admin") {
            setLogedInUser(username);
            setIsUserLogedIn(true)
            toast.success("User logged in")
        }
        else {
            toast.error("Invalid Username")

        }

    }
    return (
        <LoginContext.Provider value={{ logedInUser,setLogedInUser,logIn,logOut,isUserLogedIn,setIsUserLogedIn }} >
            {children}
        </LoginContext.Provider >

    )
}
export { LoginProvider, LoginContext };