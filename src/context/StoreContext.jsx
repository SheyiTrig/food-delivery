import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

   const [cartItems, setCartItems] = useState(() => ({}));

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=> ({...prev, [itemId]: 1}))

        }else{
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))

    }

    useEffect(() => {

        console.log(cartItems)
         
    }, [cartItems])



    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )  

}

export default StoreContextProvider

export const seyiContext = () => {
    const context = useContext(StoreContext);
    if (!context) throw new Error("Context provider not mounted")
    return context;

}

// export const seyiEffect = () => {
//        const seyiEffect = useEffect();
//      if  (!seyiEffect) throw new Error("useEffect is not imported")
//         return seyiEffect;

// }