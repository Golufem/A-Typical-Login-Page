import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    isLoggedOut: false
});
export default AuthContext