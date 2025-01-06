import { XIcon } from "lucide-react";
import EmptyCartImage from "../../public/images/illustration-empty-cart.svg";
import { CartProductType } from "../utils/types";

interface CartProps {
  productList: CartProductType[];
}

const Cart = ({ productList }: CartProps) => {
  return (
    <div className=" rounded-md px-6 py-10 gap-6 w-[500px] h-max flex bg-white flex-col items-center">
      <h2 className="w-full font-bold text-2xl text-button-color">
        {`Your Cart (${productList ? productList.length : "0"}`})
      </h2>
      <div className="flex flex-col gap-6 w-full">
        {productList.length !== 0 ? (
          <>
            {productList.map((product, index) => (
              <div
                key={product.name + index}
                className="flex w-full justify-between border-b py-4"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{product.name}</p>
                  <div className="flex gap-4">
                    <span>4x</span>
                    <span>@$7,00</span>
                    <span>$28.00</span>
                  </div>
                </div>

                <button className=" w-6 h-6 flex items-center justify-center border border-solod rounded-full">
                  <XIcon size={16} />
                </button>
              </div>
            ))}
          </>
        ) : (
          <>
            <img
              src={EmptyCartImage}
              alt="Empty cart"
              width={150}
              height={150}
            />
            <p className="text-secondary-color font-semibold text-lg">
              Your added items will appear here.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
