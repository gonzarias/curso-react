import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            /* Con los 3 puntos le indica que mantenga lo que tien*/
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart.filter(item => item.id !== payload.id)]
        });
    }
     return {
         state, 
         addToCart,
         removeFromCart}
}

export default useInitialState;