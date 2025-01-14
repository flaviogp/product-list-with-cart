import { ProductType } from "../utils/types";
import ProductItem from "./product-item";

interface ProductListProps {
  products: ProductType[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <div className="flex flex-col space-y-6 p-3">
        <h1 className="font-bold  text-4xl">Desserts</h1>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
