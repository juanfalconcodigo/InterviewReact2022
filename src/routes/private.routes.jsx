import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { rootContext } from "../provider/root.provider";


export const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { userInfo } = useContext(rootContext);
    return userInfo.isAuthenticate ? children : <Navigate to={'/login'} replace state={{ from: location }} />
}