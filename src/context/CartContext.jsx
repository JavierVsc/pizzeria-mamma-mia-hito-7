import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const pizzaInCart = cart.find((item) => item.id === pizza.id);

    if (pizzaInCart) {
      const updatedCart = cart.map((item) =>
        item.id === pizza.id
          ? { ...item, count: item.count + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      const newPizza = {
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        img: pizza.img,
        count: 1,
      };

      setCart([...cart, newPizza]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    );

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count - 1 }
          : pizza
      )
      .filter((pizza) => pizza.count > 0);

    setCart(updatedCart);
  };

  const total = cart.reduce(
    (accumulator, pizza) => accumulator + pizza.price * pizza.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};