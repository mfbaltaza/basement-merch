import React from "react";
import Image from "next/image";

import {Product} from "../../product/types";

import shirt from "@assets/products/shirt.png";

interface Props {
  product: Product;
}

const CartItem: React.FC<Props> = ({product}) => {
  return (
    <div className="border w-full min-h-full flex">
      {/* Hard-coded Item */}
      {/* <Image alt="Basement Shirt" height="230" src={shirt} width="230" />
      <div>
        <p className="text-3xl font-bold">BLACK T-SHIRT</p>
        <p className="text-2xl font-bold">Unisex Basic Softstyle T-Shirt</p>
      </div>
      <div className="flex flex-col-reverse">
        <p>{`Quantity 0`}</p>
      </div> */}
      <div className="border w-full min-h-full flex">
        <Image alt="Basement Shirt" height="230" src={product.image} width="230" />
        <div>
          <p className="text-3xl font-bold">{product.name}</p>
          <p className="text-2xl font-bold">{product.description}</p>
        </div>
        <div className="flex flex-col-reverse">
          <p>{`Quantity 0`}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
