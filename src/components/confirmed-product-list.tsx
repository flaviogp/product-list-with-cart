import { CartProductType } from "../utils/types";
import ConfirmedProductItem from "./confirmed-product-item";

interface ConfirmedProductListProps {
  cartList: CartProductType[];
}

const ConfirmedProdutList = ({ cartList }: ConfirmedProductListProps) => {
  return (
    <div className="rounded-lg overflow-y-scroll [&::-webkit-scrollbar]:hidden max-h-[250px]">
      {cartList.map((product) => (
        <ConfirmedProductItem product={product} key={product.name} />
      ))}
    </div>
  );
};

export default ConfirmedProdutList;
