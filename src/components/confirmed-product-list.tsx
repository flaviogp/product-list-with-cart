import { CartProductType } from "../utils/types";
import ConfirmedProductItem from "./confirmed-product-item";

interface ConfirmedProductListProps {
  productList: CartProductType[];
}

const ConfirmedProdutList = ({ productList }: ConfirmedProductListProps) => {
  return (
    <div className="rounded-lg overflow-y-scroll [&::-webkit-scrollbar]:hidden max-h-[200px]">
      {productList.map((product) => (
        <ConfirmedProductItem product={product} key={product.name} />
      ))}
    </div>
  );
};

export default ConfirmedProdutList;
