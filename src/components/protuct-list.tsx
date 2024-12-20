import data from "../utils/data.json";
import { ProductType } from "../utils/types";
import ProductItem from "./product-item";
const ProductList = () => {
  const products: ProductType[] = JSON.parse(JSON.stringify(data));
  return (
    <>
      <div className="flex flex-col space-y-6 p-3">
        <h1 className="font-bold  text-4xl">Desserts</h1>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
