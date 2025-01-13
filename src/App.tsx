import data from "./utils/data.json";
import { ProductType } from "./utils/types";
import ProductList from "./components/protuct-list";
import Cart from "./components/cart";
import { CartContextProvider } from "./contexts/cart-context";

function App() {
  const products: ProductType[] = JSON.parse(JSON.stringify(data));

  return (
    <CartContextProvider>
      <div className="flex p-10 gap-8">
        <ProductList products={products} />
        <Cart />
      </div>
    </CartContextProvider>
  );
}

export default App;
