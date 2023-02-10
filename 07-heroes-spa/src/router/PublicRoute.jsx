import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";


const PublicRoute = ({children}) => {
    const { authState } = useContext(AuthContext)
    const { logged } = authState;
    
    return (!logged)
        ? children
        :<Navigate to='/marvel'/>
}

export default PublicRoute
