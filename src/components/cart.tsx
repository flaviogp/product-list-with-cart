import { TreeDeciduous, XIcon } from "lucide-react";
import EmptyCart from "./empty-cart";
import { useEffect, useState } from "react";
import formatCurency from "../utils/format-currency";
import ConfirmedOrderModel from "./confirmed-order-model";
import { useCartContext } from "../contexts/cart-context";

const Cart = () => {
  const { cartList, handleDeleteProductToCart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const handleGetTotalPrice = () => {
      let total = 0;
      cartList.map((product) => {
        total += product.price * product.quantity;
      });

      return setTotalPrice(total);
    };
    handleGetTotalPrice();
  }, [cartList]);

  const handleOpenConfirmedOrderModel = () => setOrderConfirmed(true);

  return (
    <div className=" rounded-lg px-6 py-10 gap-6 min-w-[350px] md:w-[500px] h-max max-h-[700px] flex bg-white flex-col items-center">
      <h2 className="w-full font-bold text-2xl text-button-color">
        {`Your Cart (${cartList ? cartList.length : "0"}`})
      </h2>
      <div className="flex flex-col  w-full items-center overflow-y-scroll [&::-webkit-scrollbar]:hidden ">
        {cartList.length !== 0 ? (
          <>
            {cartList.map((product, index) => (
              <div
                key={product.name + index}
                className="flex w-full justify-between items-center border-t py-6 first:border-none"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg text-rose-900">
                    {product.name}
                  </p>
                  <div className="flex gap-4 text-md">
                    <span className="text-button-color font-semibold">
                      {product.quantity}x
                    </span>
                    <span className="text-secondary-color">
                      @{formatCurency(product.price)}
                    </span>
                    <span className="text-secondary-color font-semibold">
                      {formatCurency(product.price * product.quantity)}
                    </span>
                  </div>
                </div>

                <button
                  className=" w-6 h-6 flex items-center justify-center border border-solid border-rose-400 rounded-full text-rose-400 hover:text-rose-900 hover:border-rose-900"
                  onClick={() => handleDeleteProductToCart(product)}
                >
                  <XIcon size={16} />
                </button>
              </div>
            ))}
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
      {cartList.length !== 0 && (
        <div className="flex flex-col gap-6 w-full items-center border-t pt-6">
          <div className="flex w-full justify-between text-rose-900">
            <p className="text-lg">Order Total</p>
            <p className="text-2xl font-bold">{formatCurency(totalPrice)}</p>
          </div>
          <div className="flex p-4 bg-rose-100 w-full rounded-md justify-center">
            <span className="flex gap-2 text-rose-900">
              <TreeDeciduous />
              This is a <b>carbon-neutral</b> delivery
            </span>
          </div>
          <button
            className="w-full bg-button-color py-5 rounded-full text-xl text-white font-semibold hover:bg-button-color-hover"
            onClick={handleOpenConfirmedOrderModel}
          >
            Confirm Order
          </button>
        </div>
      )}
      {orderConfirmed && cartList.length >= 1 && (
        <ConfirmedOrderModel
          cartList={cartList}
          totalPrice={totalPrice}
          setOrderConfirmed={setOrderConfirmed}
        />
      )}
    </div>
  );
};

export default Cart;
