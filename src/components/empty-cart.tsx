import EmptyCartImage from "../../public/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <>
      <img src={EmptyCartImage} alt="Empty cart" width={150} height={150} />
      <p className="text-secondary-color font-semibold text-lg">
        Your added items will appear here.
      </p>
    </>
  );
};

export default EmptyCart;
