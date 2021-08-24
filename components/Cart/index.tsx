import React from "react";
import Image from "next/image";

import yourcartlarge from "@assets/yourcartlarge.svg";

interface Props {
  productName: String;
  price?: Number;
}

const Index: React.FC<Props> = ({productName}) => {
  return (
    <div className="bg-smoke-darkest bg-opacity-50 z-50 absolute inset-0 flex justify-end items-start">
      <div className="bg-smoke-darkest h-modal max-w-xl max-h-96 flex">
        <p className="font-bold text-2xl cursor-pointer">CLOSE</p>
        <Image alt="Your Cart" src={yourcartlarge} />
        <h4>Basement</h4>
        <p>Price </p>
      </div>
    </div>
  );
};

export default Index;
