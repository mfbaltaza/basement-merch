import Image from "next/legacy/image";

import {Product} from "../../product/types";

import CartItem from "./CartItem";

import yourcartlarge from "@assets/yourcartlarge.svg";
import checkout from "@assets/checkout.svg";

interface Props {
  cartItems: Product[];
  setCartVisibility: any;
  setCartItems: any;
}

const Cart: React.FC<Props> = ({cartItems, setCartVisibility, setCartItems}) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const handleClose = () => {
    document.body.style.overflow = "auto";
    setCartVisibility(false);
  };

  return (
    <div className="bg-smoke-darkest bg-opacity-50 z-50 absolute inset-0 flex justify-end">
      <div className="md:border-b md:border-l bg-smoke-darkest h-modal max-w-full md:max-w-xl max-h-full md:max-h-96 flex flex-wrap justify-end items-end overflow-x-hidden overflow-scroll">
        <div className="pt-md pb-md mx-4">
          <p className="font-bold text-2xl cursor-pointer" onClick={handleClose}>
            → CLOSE
          </p>
        </div>
        <div className="mb-6 mx-4">
          <Image alt="Your Cart" src={yourcartlarge} />
        </div>
        {cartItems.length === 0 && <p className="text-4xl">Cart is Empty</p>}
        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            cartItems={cartItems}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
        <div className="flex flex-col md:flex-row md:m-0 m-auto">
          <div className="border-b md:border-t md:border-b-0 h-24 flex m-auto md:m-0">
            <h3 className="text-3xl font-bold self-center m-auto md:ml-8 md:mr-8">{`TOTAL: $${itemsPrice.toFixed(
              2,
            )}`}</h3>
          </div>
          <div className="md:border md:border-b-0 h-24 flex m-auto md:m-0">
            <div
              className="self-center px-lg cursor-pointer"
              onClick={() =>
                console.log(`Now you don't got any money, total is  $${itemsPrice}`, cartItems)
              }
            >
              <Image alt="Checkout" src={checkout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
