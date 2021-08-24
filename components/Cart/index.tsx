import React from "react";
import Image from "next/image";

import {Product} from "../../product/types";

import CartItem from "./CartItem";

import yourcartlarge from "@assets/yourcartlarge.svg";
import checkout from "@assets/checkout.svg";

interface Props {
  cartItems: Product[];
  setCartVisibility: any;
}

const Cart: React.FC<Props> = ({cartItems, setCartVisibility}) => {
  console.log(cartItems);

  return (
    <div className="bg-smoke-darkest bg-opacity-50 z-50 absolute inset-0 flex justify-end">
      <div className="bg-smoke-darkest h-modal max-w-xl max-h-96 flex flex-wrap justify-end mr-4 items-end overflow-scroll">
        <div className="pt-md pb-md">
          <p className="font-bold text-2xl cursor-pointer" onClick={() => setCartVisibility(false)}>
            CLOSE
          </p>
        </div>
        <Image alt="Your Cart" src={yourcartlarge} />
        {cartItems.length === 0 && <p className="text-4xl">Cart is Empty</p>}
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
        {/* <div>
          {products.map((product) => (
            <Image
              key={product.id}
              alt={product.name}
              height="410"
              src={product.image}
              width="311"
            />
          ))}
        </div> */}
        <div className="border h-24 flex">
          <h3 className="text-3xl font-bold self-center ml-8 mr-8">{`TOTAL: $2300`}</h3>
        </div>
        <div className="border h-24 flex">
          <div
            className="self-center px-lg cursor-pointer"
            onClick={() => console.log("Now you don't got money")}
          >
            <Image alt="Checkout" src={checkout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
