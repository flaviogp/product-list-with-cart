import { DiamondMinus, DiamondPlus, ShoppingCartIcon } from "lucide-react";
import { ProductType } from "../utils/types";
import { useCartContext } from "../contexts/cart-context";
interface ProductItemProps {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const {
    cartList,
    handleAddProductToCart,
    handleDecreaseProductToCart,
    handleIncreaseProductToCart,
  } = useCartContext();
  const hasProductInCart = cartList.find((p) => p.name === product.name);
  return (
    <div className="flex flex-col ">
      <div
        className={`flex w-full justify-center relative mb-8 rounded-lg ${
          hasProductInCart && "border-2 border-button-color"
        }`}
      >
        <img
          src={product.image.desktop}
          alt={product.name}
          width={300}
          height={300}
          className="rounded-lg"
        />
        {!hasProductInCart ? (
          <button
            className=" hover:text-button-color w-40 flex gap-3 bg-white py-2 px-4  absolute bottom-[-22px] border border-solid border-button-color rounded-full"
            onClick={() => handleAddProductToCart({ ...product, quantity: 1 })}
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
              onClick={() => handleDecreaseProductToCart(hasProductInCart)}
            >
              <DiamondMinus className="hover:fill-white hover:text-button-color" />
            </button>
            <span>{hasProductInCart.quantity}</span>
            <button
              onClick={() => handleIncreaseProductToCart(hasProductInCart)}
            >
              <DiamondPlus className="hover:fill-white hover:text-button-color" />
            </button>
          </div>
        )}
      </div>
      <div>
        <span className="text-sm text-rose-400">{product.category}</span>
        <p className="font-semibold">{product.name}</p>
        <p className="font-bold text-button-color">
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
