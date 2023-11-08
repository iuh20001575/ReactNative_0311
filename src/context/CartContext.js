import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    return <CartContext.Provider {...props} value={{ cart, setCart }} />;
};

const useCart = () => useContext(CartContext);

export default useCart;
export { CartProvider };
