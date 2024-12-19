import data from "../utils/data.json";
import { Product } from "../utils/types";
const ProductList = () => {
  const products: Product[] = JSON.parse(JSON.stringify(data));
  return (
    <>
      <h1 className="font bold">Desserts</h1>
      <div className="grid grid-cols-3">
        {products.map((product) => (
          <div className="w-48 h-48" key={product.name}>
            <img
              alt={product.name}
              src={product.image.desktop}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
