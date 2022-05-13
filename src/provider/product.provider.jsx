import { createContext, useState } from "react"

export const productContext = createContext({productSelected:{},shoppingCart:[]});
const { Provider } = productContext;

export const ProductProvider = ({ children }) => {
    const [product,setProduct]=useState({});
    const [shoppingCart,setShoppingCart]=useState([]);
    return (
        <>
            <Provider value={{productSelected:product,setProduct,shoppingCart,setShoppingCart}}>
                {children}
            </Provider>
        </>
    )
}