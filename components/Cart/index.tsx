import React from "react";
import Image from "next/image";

import yourcartlarge from "@assets/yourcartlarge.svg";
import checkout from "@assets/checkout.svg";

interface Props {
  productName: String;
  price?: Number;
  setCartVisibility?: any;
}

const Index: React.FC<Props> = ({productName, setCartVisibility}) => {
  return (
    <div className="bg-smoke-darkest bg-opacity-50 z-50 absolute inset-0 flex justify-end">
      <div className="bg-smoke-darkest h-modal max-w-xl max-h-96 flex flex-wrap justify-end mr-4 items-end">
        <div className="max-h-px pt-md">
          <p className="font-bold text-2xl cursor-pointer" onClick={() => setCartVisibility(false)}>
            CLOSE
          </p>
        </div>
        <Image alt="Your Cart" src={yourcartlarge} />
        <div className="border min-w-max h-24">
          <h3 className="text-3xl font-bold">{`TOTAL: $2300`}</h3>
        </div>
        <div className="border h-24 flex">
          <div className="self-center px-lg">
            <Image alt="Checkout" src={checkout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
