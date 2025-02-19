import { CheckIcon } from "lucide-react";
import ConfirmedProdutList from "./confirmed-product-list";
import { CartProductType } from "../utils/types";
import formatCurency from "../utils/format-currency";
import { useCartContext } from "../contexts/cart-context";

interface ConfirmedOrderModelProps {
  cartList: CartProductType[];
  totalPrice: number;
  setOrderConfirmed: (value: boolean) => void;
}

const ConfirmedOrderModel = ({
  cartList,
  totalPrice,
  setOrderConfirmed,
}: ConfirmedOrderModelProps) => {
  const { handleEmptyCart } = useCartContext();

  const sendOrder = () => {
    // There should be a code here to send the order to the backend or somewhere else.
    handleEmptyCart();
    setOrderConfirmed(false);
  };

  return (
    <div className="fixed h-[100%] w-[100%] bg-black/50 top-0 left-0 flex items-center justify-center">
      <div className="bg-white flex flex-col space-y-7 p-5 rounded-lg w-[90%] h-[90%] md:w-[500px] md:h-min md:max-h-[600px]">
        <div className=" w-8 h-8 flex justify-center items-center border-2 border-solid border-secondary-color rounded-full">
          <CheckIcon className="text-secondary-color font-bold" size={16} />
        </div>
        <div className="">
          <h2 className="text-4xl font-bold text-rose-900">Order Confirmed</h2>
          <p className="text-md text-secondary-color">
            we hope you enjoy your food!{" "}
          </p>
        </div>

        <div className="bg-rose-50 flex flex-col px-5">
          <ConfirmedProdutList cartList={cartList} />
          <div className="flex justify-between py-4">
            <p className="font-semibold text-md">Order Total</p>
            <p className="font-bold text-xl">{formatCurency(totalPrice)}</p>
          </div>
        </div>
        <button
          className="bg-button-color hover:bg-button-color-hover p-3 rounded-full text-lg text-white"
          onClick={sendOrder}
        >
          Start new Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmedOrderModel;
