import { createContext, useState } from "react";
import { getLocalStorage } from "../utilidades/format";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ cartItens, setCartItens] = useState(getLocalStorage() || []);
    const [ isCartOpen, setIsCartOpen ] = useState(false);

    const object = {
       products,
       setProducts,
       loading,
       setLoading,
       cartItens,
       setCartItens,
       isCartOpen, 
       setIsCartOpen
    };

    return (
        <AppContext.Provider value={object}>
            {children}
        </AppContext.Provider>
    )
};