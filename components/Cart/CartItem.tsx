import Image from "next/legacy/image";

import {CartItem as CartItemType} from "../../product/types";

interface Props {
  item: CartItemType;
  onIncrement: () => void;
  onRemove: () => void;
  onSizeChange: (size: string) => void;
}

const CartItem: React.FC<Props> = ({item, onIncrement, onRemove, onSizeChange}) => {
  const productTotalPrice = item.price * item.qty;
  const sizeOption = item.options.find((option) => option.label === "size");

  return (
    <div className="border flex gap-4 p-sm md:p-md">
      <div className="relative w-28 h-32 md:w-56 md:h-56 shrink-0">
        <Image alt={item.name} layout="fill" objectFit="cover" src={item.image} />
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-2xl md:text-3xl font-bold uppercase">{item.name}</p>
        <p className="text-gray-sub text-lg md:text-2xl font-bold">{item.description}</p>
        <div className="mt-auto pt-sm flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold uppercase">Quantity:</p>
            <div className="border rounded-full px-md py-xs flex items-center gap-4 leading-none">
              <button className="font-bold" type="button" onClick={onRemove}>
                −
              </button>
              <span className="w-4 text-center font-bold">{item.qty}</span>
              <button className="font-bold" type="button" onClick={onIncrement}>
                +
              </button>
            </div>
          </div>
          {sizeOption && (
            <div className="flex items-center gap-2">
              <p className="text-lg font-bold uppercase">{sizeOption.label}:</p>
              {sizeOption.values.map((value) => (
                <button
                  key={value}
                  className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${
                    item.size === value ? "border-2" : "text-gray-sub"
                  }`}
                  type="button"
                  onClick={() => onSizeChange(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          )}
          <p className="self-end text-3xl md:text-4xl font-bold">${productTotalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
