import Image from "next/image";

import {Product} from "../../product/types";

import addToCart from "@assets/addtocard.svg";

interface Props {
  product: Product;
  cartItems: Product[];
  setCartItems: (x: any[]) => void;
}

const ProductCard: React.FC<Props> = ({product, cartItems, setCartItems}) => {
  const handleClick = () => {
    () => {
      const exist = cartItems.find((x) => x.id === product.id);

      if (exist) {
        setCartItems(
          cartItems.map((x) => (x.id === product.id ? {...exist, qty: exist.qty + 1} : x)),
        );
      } else {
        setCartItems([...cartItems, {...product, qty: 1}]);
      }
    };
  };

  return (
    <div className="product-3" onClick={handleClick}>
      <div className="cursor-pointer group relative bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
        <Image alt="Basement Cap" src={product.image} />
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-56 right-7 sm:left-1/4 ">
          <Image alt="Add To Cart" src={addToCart} />
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
