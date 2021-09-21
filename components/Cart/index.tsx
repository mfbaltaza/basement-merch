import Image from "next/image";

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
      <div className="border-b border-l bg-smoke-darkest h-modal max-w-xl max-h-96 flex flex-wrap justify-end mr-4 items-end overflow-x-hidden overflow-scroll">
        <div className="pt-md pb-md">
          <p className="font-bold text-2xl cursor-pointer" onClick={handleClose}>
            CLOSE
          </p>
        </div>
        <div className="mb-6">
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
        <div className="border h-24 flex">
          <h3 className="text-3xl font-bold self-center ml-8 mr-8">{`TOTAL: $${itemsPrice}`}</h3>
        </div>
        <div className="border h-24 flex">
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
  );
};

export default Cart;
