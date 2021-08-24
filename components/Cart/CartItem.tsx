import React from "react";
import Image from "next/image";

import shirt from "@assets/products/shirt.png";

const CartItem: React.FC = () => {
  return (
    <div className="border w-full min-h-full flex">
      <Image alt="Basement Shirt" height="230" src={shirt} width="230" />
      <div>
        <p className="text-3xl font-bold">BLACK T-SHIRT</p>
        <p className="text-2xl font-bold">Unisex Basic Softstyle T-Shirt</p>
      </div>
      <div className="flex flex-col-reverse">
        <p>{`Quantity 0`}</p>
      </div>
    </div>
  );
};

export default CartItem;
