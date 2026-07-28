import Image from "next/legacy/image";
import {useEffect, useRef, useState} from "react";

import {Product} from "../../product/types";

import addToCart from "@assets/addtocard.svg";

interface Props {
  product: Product;
  addItem: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({product, addItem}) => {
  const [added, setAdded] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setAdded(false), 900);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div onClick={handleAdd}>
      <div className="cursor-pointer group relative bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
        <Image alt={product.name} height="700" src={product.image} width="500" />
        <div
          className={`w-full absolute flex justify-center bottom-2/4 transition-opacity ${
            added ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {added ? (
            <span className="animate-pop bg-black border-2 rounded-full px-lg py-sm text-2xl font-bold whitespace-nowrap">
              ADDED
            </span>
          ) : (
            <Image alt="Add To Cart" src={addToCart} />
          )}
        </div>
      </div>
      <div className="flex justify-between py-sm text-center">
        <p className="text-xl font-bold">{`${product.name}`}</p>
        <p className="text-xl font-bold">{`$${product.price}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
