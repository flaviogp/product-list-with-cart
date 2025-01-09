import { TreeDeciduous, XIcon } from "lucide-react";
import { CartProductType } from "../utils/types";
import EmptyCart from "./empty-cart";
import { useEffect, useState } from "react";
import formatCurency from "../utils/format-currency";

interface CartProps {
  productList: CartProductType[];
}

const Cart = ({ productList }: CartProps) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const handleGetTotalPrice = () => {
      let total = 0;
      productList.map((product) => {
        total += product.price * product.quantity;
      });

      return setTotalPrice(total);
    };
    handleGetTotalPrice();
  }, [productList]);

  return (
    <div className=" rounded-md px-6 py-10 gap-6 w-[500px] h-max max-h-[700px] flex bg-white flex-col items-center">
      <h2 className="w-full font-bold text-2xl text-button-color">
        {`Your Cart (${productList ? productList.length : "0"}`})
      </h2>
      <div className="flex flex-col  w-full items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden ">
        {productList.length !== 0 ? (
          <>
            {productList.map((product, index) => (
              <div
                key={product.name + index}
                className="flex w-full justify-between items-center border-t py-6 first:border-none"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{product.name}</p>
                  <div className="flex gap-4">
                    <span>{product.quantity}</span>
                    <span>@{formatCurency(product.price)}</span>
                    <span>
                      {formatCurency(product.price * product.quantity)}
                    </span>
                  </div>
                </div>

                <button className=" w-6 h-6 flex items-center justify-center border border-solod rounded-full">
                  <XIcon size={16} />
                </button>
              </div>
            ))}
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
      {productList.length !== 0 && (
        <div className="flex flex-col gap-6 w-full items-center border-t pt-6">
          <div className="flex w-full justify-between">
            <p className="text-lg">Order Total</p>
            <p className="text-2xl font-bold">{formatCurency(totalPrice)}</p>
          </div>
          <div className="flex p-4 bg-rose-100 w-full rounded-md justify-center">
            <span className="flex gap-2 text-rose-900">
              <TreeDeciduous />
              This is a <b>carbon-neutral</b> delivery
            </span>
          </div>
          <button className="w-full bg-button-color py-5 rounded-full text-xl text-white font-semibold hover:bg-button-color-hover">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
