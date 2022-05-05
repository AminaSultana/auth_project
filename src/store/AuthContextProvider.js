import React,{ useState} from 'react';

import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
    const [idToken, setIdToken] = useState(null);
    const isLoggedIn = !!idToken

    const loginHandler = (token)=>{
        setIdToken(token);
        console.log("id in auth", contextValue.idToken);
    }

    const logoutHandler = ()=>{
        setIdToken(null)
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
