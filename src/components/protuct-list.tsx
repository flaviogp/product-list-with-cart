import { CartProductType, ProductType } from "../utils/types";
import ProductItem from "./product-item";

interface ProductListProps {
  products: ProductType[];
  handdleAddProductToCart: (product: CartProductType) => void;
  handdleIncreaseProductToCart: (product: CartProductType) => void;
  handdleDecreaseProductToCart: (product: CartProductType) => void;
  cartList: CartProductType[];
}

const ProductList = ({
  products,
  handdleAddProductToCart,
  cartList,
  handdleIncreaseProductToCart,
  handdleDecreaseProductToCart,
}: ProductListProps) => {
  return (
    <>
      <div className="flex flex-col space-y-6 p-3">
        <h1 className="font-bold  text-4xl">Desserts</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem
              key={product.name}
              product={product}
              handdleAddProductToCart={handdleAddProductToCart}
              handdleIncreaseProductToCart={handdleIncreaseProductToCart}
              handdleDecreaseProductToCart={handdleDecreaseProductToCart}
              cartList={cartList}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
