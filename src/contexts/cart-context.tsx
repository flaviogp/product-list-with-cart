import { useState, createContext, useContext } from "react";
import { CartProductType } from "../utils/types";

type CartContextType = {
  cartList: CartProductType[];
  handleAddProductToCart: (product: CartProductType) => void;
  handleIncreaseProductToCart: (product: CartProductType) => void;
  handleDecreaseProductToCart: (product: CartProductType) => void;
  handleDeleteProductToCart: (product: CartProductType) => void;
  handleEmptyCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: React.PropsWithChildren) => {
  const [cartList, setCartList] = useState<CartProductType[]>([]);

  const handleAddProductToCart = (product: CartProductType) => {
    return setCartList([...cartList, product]);
  };
  const handleIncreaseProductToCart = (product: CartProductType) => {
    const oldList = [...cartList];
    const oldProduct = oldList.find((p) => p.name === product.name);
    if (!oldProduct) return;
    const productIndex = oldList.indexOf(oldProduct);
    oldList.splice(productIndex, 1);
    const newList = [
      ...oldList,
      { ...oldProduct, quantity: oldProduct.quantity + 1 },
    ].reverse();
    setCartList(newList);
  };
  const handleDecreaseProductToCart = (product: CartProductType) => {
    const oldList = [...cartList];
    const oldProduct = oldList.find((p) => p.name === product.name);
    if (!oldProduct) return;
    const productIndex = oldList.indexOf(oldProduct);
    oldList.splice(productIndex, 1);
    if (oldProduct.quantity === 1) return;
    setCartList([
      ...oldList,
      { ...oldProduct, quantity: oldProduct.quantity - 1 },
    ]);
  };

  const handleDeleteProductToCart = (product: CartProductType) => {
    const oldList = [...cartList];
    const oldProduct = oldList.find((p) => p.name === product.name);
    if (!oldProduct) return;
    const productIndex = oldList.indexOf(oldProduct);
    oldList.splice(productIndex, 1);
    setCartList([...oldList]);
  };

  const handleEmptyCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        handleAddProductToCart,
        handleDecreaseProductToCart,
        handleIncreaseProductToCart,
        handleDeleteProductToCart,
        handleEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("Cart context should be used within a provider!");
  }
  return cartContext;
};
