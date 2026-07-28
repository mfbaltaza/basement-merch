import {useEffect, useState} from "react";

import data from "./mock.json";
import {CartItem, Product} from "./types";

const STORAGE_KEY = "basement-cart";

const products = data as Product[];

const defaultSize = (product: Product) => product.options[0]?.values[0] ?? "";

const sameLine = (a: CartItem, id: string, size: string) => a.id === id && a.size === size;

// Products are guaranteed to always exist and never change,
// so we only persist what the user chose: id, qty and size.
function readStorage(): CartItem[] {
  try {
    const stored: Pick<CartItem, "id" | "qty" | "size">[] = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "[]",
    );

    return stored.flatMap((item) => {
      const product = products.find((p) => p.id === item.id);

      if (!product || !item.qty) return [];

      return [{...product, qty: item.qty, size: item.size || defaultSize(product)}];
    });
  } catch {
    return [];
  }
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCartItems(readStorage());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const stored = cartItems.map(({id, qty, size}) => ({id, qty, size}));

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }, [cartItems, hydrated]);

  const addItem = (product: Product, size = defaultSize(product)) => {
    setCartItems((items) => {
      const existing = items.find((item) => sameLine(item, product.id, size));

      if (existing) {
        return items.map((item) =>
          sameLine(item, product.id, size) ? {...item, qty: item.qty + 1} : item,
        );
      }

      return [...items, {...product, qty: 1, size}];
    });
  };

  const removeItem = ({id, size, qty}: CartItem) => {
    setCartItems((items) =>
      qty > 1
        ? items.map((item) => (sameLine(item, id, size) ? {...item, qty: item.qty - 1} : item))
        : items.filter((item) => !sameLine(item, id, size)),
    );
  };

  const changeSize = (item: CartItem, size: string) => {
    if (item.size === size) return;

    setCartItems((items) => {
      const target = items.find((i) => sameLine(i, item.id, size));

      // If a line with the same product and size already exists, merge them.
      if (target) {
        return items
          .filter((i) => !sameLine(i, item.id, item.size) && !sameLine(i, item.id, size))
          .concat({...target, qty: target.qty + item.qty});
      }

      return items.map((i) => (sameLine(i, item.id, item.size) ? {...i, size} : i));
    });
  };

  return {cartItems, addItem, removeItem, changeSize};
}
