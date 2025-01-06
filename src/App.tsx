import data from "./utils/data.json";
import { CartProductType, ProductType } from "./utils/types";
import ProductList from "./components/protuct-list";
import Cart from "./components/cart";
import { useState } from "react";

function App() {
  const products: ProductType[] = JSON.parse(JSON.stringify(data));
  const [cartList, setCartList] = useState<CartProductType[]>([]);

  const handdleAddProductToCart = (product: CartProductType) => {
    const oldList = [...cartList];
    const oldProduct = oldList.find((p) => p.name === product.name);
    if (!oldProduct) {
      return setCartList([...cartList, product]);
    }
    const productIndex = oldList.indexOf(oldProduct);
    oldList.splice(productIndex, 1);
    console.log("old ->", oldList);
    setCartList([
      ...oldList,
      { ...oldProduct, quantity: oldProduct.quantity + 1 },
    ]);
    console.log(cartList);
  };
  // const handdleIncreaseProductToCart = () => {};
  // const handdleDecreaseProductToCart = () => {};

  return (
    <>
      <div className="flex p-10 gap-8">
        <ProductList
          products={products}
          handdleAddProductToCart={handdleAddProductToCart}
        />
        <Cart productList={cartList} />
      </div>
    </>
  );
}

export default App;
