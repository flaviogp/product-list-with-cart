import { ShoppingCartIcon } from "lucide-react";
import { ProductType } from "../utils/types";

interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col ">
      <div className=" flex w-full justify-center relative mb-8">
        <img
          src={product.image.desktop}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <button className="flex gap-3 bg-white py-2 px-4  absolute bottom-[-22px] border border-solid border-button-color rounded-full">
          <ShoppingCartIcon className="text-button-color" />
          <p className="font-semibold">Add to Cart</p>
        </button>
      </div>
      <div>
        <span className="text-sm text-rose-400">{product.category}</span>
        <p className="font-semibold">{product.name}</p>
        <p className="font-semibold text-secondary-color">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
