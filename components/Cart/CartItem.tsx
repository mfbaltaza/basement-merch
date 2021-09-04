import Image from "next/image";

import {Product} from "../../product/types";

interface Props {
  product: Product;
  cartItems: Product[];
  setCartItems: any;
}

const CartItem: React.FC<Props> = ({product, cartItems, setCartItems}) => {
  const handleRemove = () => {
    const exist: any = cartItems.find((x) => x.id === product.id);

    if (exist?.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? {...exist, qty: exist.qty - 1} : x)),
      );
    }
  };

  return (
    <div className="w-full min-h-full flex">
      <div className="w-full min-h-full flex">
        <Image alt="Basement Shirt" height="218" src={product.image} width="500" />
        <div>
          <p className="text-3xl font-bold">{product.name}</p>
          <p className="text-2xl font-bold">{product.description}</p>
        </div>
        <div className="flex flex-col-reverse">
          <p>{`Quantity ${product.qty}`}</p>
          <p className="cursor-pointer" onClick={handleRemove}>
            Remove
          </p>
          <p className="text-5xl">${product.price * product.qty}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
