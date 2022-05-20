import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { rootContext } from "../provider/root.provider";



export default function PrivateRoute({ children }) {
    const {userInfo} = useContext(rootContext);
    const location = useLocation()
    return (
        userInfo.isAuthenticate ? children : <Navigate to="/login" replace state={{ from: location }} />
    )
}
