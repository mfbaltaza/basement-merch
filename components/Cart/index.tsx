import Image from "next/legacy/image";
import {useEffect} from "react";

import {CartItem as CartItemType, Product} from "../../product/types";

import CartItem from "./CartItem";

import yourcartlarge from "@assets/yourcartlarge.svg";
import checkout from "@assets/checkout.svg";

interface Props {
  cartItems: CartItemType[];
  addItem: (product: Product, size?: string) => void;
  removeItem: (item: CartItemType) => void;
  changeSize: (item: CartItemType, size: string) => void;
  setCartVisibility: (visible: boolean) => void;
}

const Cart: React.FC<Props> = ({cartItems, addItem, removeItem, changeSize, setCartVisibility}) => {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const handleClose = () => setCartVisibility(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-smoke-darker flex justify-center md:justify-end items-start overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="w-full md:max-w-3xl bg-black border-l border-r border-b flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end px-md pt-md">
          <button className="font-bold text-2xl cursor-pointer" type="button" onClick={handleClose}>
            CLOSE
          </button>
        </div>
        <div className="px-md pb-md">
          <Image alt="Your Cart" height={93} layout="responsive" src={yourcartlarge} width={761} />
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-md pb-md flex flex-col gap-4">
          {cartItems.length === 0 && (
            <p className="text-gray-sub text-2xl font-bold text-center py-xl">Your cart is empty</p>
          )}
          {cartItems.map((item) => (
            <CartItem
              key={`${item.id}-${item.size}`}
              item={item}
              onIncrement={() => addItem(item, item.size)}
              onRemove={() => removeItem(item)}
              onSizeChange={(size) => changeSize(item, size)}
            />
          ))}
        </div>
        <div className="mt-md border-t flex flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-center md:justify-start py-md md:pl-lg border-b md:border-b-0 md:border-r">
            <h3 className="text-3xl font-bold">{`TOTAL: $${itemsPrice.toFixed(2)}`}</h3>
          </div>
          <button
            className="flex items-center justify-center cursor-pointer px-lg py-md"
            type="button"
            onClick={() =>
              console.log(`Now you don't got any money, total is $${itemsPrice}`, cartItems)
            }
          >
            <span className="block md:hidden w-full">
              <Image alt="Checkout" height={31} layout="responsive" src={checkout} width={236} />
            </span>
            <span className="hidden md:block">
              <Image alt="Checkout" height={31} src={checkout} width={236} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
