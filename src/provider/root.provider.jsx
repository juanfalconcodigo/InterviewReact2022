import { createContext, useState } from "react"

export const rootContext = createContext({productSelected:{},shoppingCart:[],userInfo:null});
const { Provider } = rootContext;

export const RootProvider = ({ children }) => {
    const [product,setProduct]=useState({});
    const [shoppingCart,setShoppingCart]=useState([]);
    const [userInfo,setUserInfo]=useState({data:null,isAuthenticate:false});
    return (
        <>
            <Provider value={{productSelected:product,setProduct,shoppingCart,setShoppingCart,userInfo,setUserInfo}}>
                {children}
            </Provider>
        </>
    )
}