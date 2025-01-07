import { DiamondMinus, DiamondPlus, ShoppingCartIcon } from "lucide-react";
import { CartProductType, ProductType } from "../utils/types";

interface ProductItemProps {
  product: ProductType;
  handdleAddProductToCart: (product: CartProductType) => void;
  handdleIncreaseProductToCart: (product: CartProductType) => void;
  handdleDecreaseProductToCart: (product: CartProductType) => void;
  cartList: CartProductType[];
}

const ProductItem = ({
  product,
  handdleAddProductToCart,
  cartList,
  handdleIncreaseProductToCart,
  handdleDecreaseProductToCart,
}: ProductItemProps) => {
  const hasProductInCart = cartList.find((p) => p.name === product.name);

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
        {!hasProductInCart ? (
          <button
            className="w-40 flex gap-3 bg-white py-2 px-4  absolute bottom-[-22px] border border-solid border-button-color rounded-full"
            onClick={() => handdleAddProductToCart({ ...product, quantity: 1 })}
          >
            <ShoppingCartIcon className="text-button-color" />
            <p className="font-semibold">Add to Cart</p>
          </button>
        ) : (
          <div
            className="text-white w-40 flex gap-3 bg-button-color py-2 px-4  
            absolute bottom-[-22px] border border-solid border-button-color 
            rounded-full justify-between"
          >
            <button
              onClick={() => handdleDecreaseProductToCart(hasProductInCart)}
            >
              <DiamondMinus />
            </button>
            <span>{hasProductInCart.quantity}</span>
            <button
              onClick={() => handdleIncreaseProductToCart(hasProductInCart)}
            >
              <DiamondPlus />
            </button>
          </div>
        )}
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
