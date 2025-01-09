import data from "../utils/data.json";
import formatCurency from "../utils/format-currency";

import { CartProductType } from "../utils/types";

interface ConfirmedProductItemProps {
  product: CartProductType;
}

const ConfirmedProductItem = ({ product }: ConfirmedProductItemProps) => {
  const getProductImage = (product: CartProductType) => {
    const productList = JSON.parse(JSON.stringify(data));

    const p = productList.find((p) => p.name === product.name);
    return p.image.desktop;
  };
  getProductImage(product);
  return (
    <div className="flex justify-between items-center border-b border-rose-300 py-4">
      <div className="flex items-center gap-3">
        <img
          src={getProductImage(product)}
          alt={product.name}
          width={70}
          height={50}
        />
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-md">{product.name}</p>
          <div className="flex gap-4">
            <span className="font-semibold text-button-color">
              {product.quantity}x
            </span>
            <span className="text-secondary-color">
              @{formatCurency(product.price)}
            </span>
          </div>
        </div>
      </div>
      <p className="text-md font-bold">
        {formatCurency(product.price * product.quantity)}
      </p>
    </div>
  );
};

export default ConfirmedProductItem;
