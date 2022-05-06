import React,{ useState} from 'react';

import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token");
    const [idToken, setIdToken] = useState(initialToken);
    
    const isLoggedIn = !!idToken

    const loginHandler = (token)=>{
        setIdToken(token);
        localStorage.setItem("token", token);
        console.log("id in auth", contextValue.idToken);
    }

    const logoutHandler = ()=>{
        setIdToken(null)
        localStorage.removeItem("token")
    }

    const contextValue = {
        idToken: idToken,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    
  return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
