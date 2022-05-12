import { createContext, useState } from "react";

export const productProvider = createContext({ productSelected: {} });
const { Provider } = productProvider;
export const ProductProvider = ({children}) => {
    const [productSelected,setProductSelected] = useState({});
    return (
       <Provider value={{productSelected,setProductSelected}}>
           {children}
       </Provider>
    );
}

