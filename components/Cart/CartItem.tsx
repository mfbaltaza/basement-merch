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

  const handleAdd = () => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? {...exist, qty: exist.qty + 1} : x)),
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  const productTotalPrice = product.price * product.qty;

  return (
    <div className="w-full md:min-h-full flex border">
      <div className="w-full min-h-full flex">
        <Image alt="Basement Shirt" height="218" src={product.image} width="500" />
        <div className="flex flex-col">
          <p className="text-3xl font-bold">{product.name}</p>
          <p className="text-2xl font-bold">{product.description}</p>
          <div className="flex flex-col">
            <div className="font-bold px-md w-20 mt-20 mb-5">
              <div className="m-auto">
                <p className="text-2xl">Quantity: </p>
                <div className="border rounded-full p-md min-w-max">
                  <button onClick={handleRemove}>-</button> {`${product.qty} `}
                  <button onClick={handleAdd}>+</button>
                </div>
              </div>
            </div>
            <p className="text-5xl self-end mr-3">${productTotalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
