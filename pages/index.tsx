import type {NextPage} from "next";
import Image from "next/legacy/image";
import {useEffect, useRef, useState} from "react";

import data from "product/mock.json";
import {Product} from "product/types";
import {useCart} from "product/useCart";
import Cart from "components/Cart";
import logo from "@assets/logo.svg";
import altlogo from "@assets/altlogo.svg";
import hero from "@assets/header.svg";
import hd4k from "@assets/hd-4k.svg";
import footer from "@assets/footer.svg";
import ProductList from "components/products/ProductList";

const Home: NextPage = () => {
  const {cartItems, addItem, removeItem, changeSize} = useCart();
  const [cartVisibility, setCartVisibility] = useState(false);
  const [bump, setBump] = useState(false);
  const bumpTimeout = useRef<ReturnType<typeof setTimeout>>();

  const [...products] = data as Product[];

  const handleAddToCart = (product: Product) => {
    addItem(product);
    setBump(true);
    clearTimeout(bumpTimeout.current);
    bumpTimeout.current = setTimeout(() => setBump(false), 300);
  };

  useEffect(() => () => clearTimeout(bumpTimeout.current), []);

  return (
    <div className="overflow-x-hidden">
      {cartVisibility && (
        <Cart
          addItem={addItem}
          cartItems={cartItems}
          changeSize={changeSize}
          removeItem={removeItem}
          setCartVisibility={setCartVisibility}
        />
      )}
      <nav className="mx-8 mt-8 flex justify-between">
        <div className="hidden md:block">
          <Image alt="Basement" src={logo} />
        </div>
        <div className="h-8 md:hidden">
          <Image alt="Basement" height="40" src={altlogo} width="40" />
        </div>
        <div className="hidden md:block">
          <Image alt="" src={hd4k} />
        </div>
        <button
          className={`border-2 h-max rounded-full px-lg py-xs ${bump ? "animate-bump" : ""}`}
          onClick={() => setCartVisibility(true)}
        >
          CART ({cartItems.length})
        </button>
      </nav>
      <main>
        {/* Hero Section */}
        <div className="w-auto mx-8 my-11 flex justify-center">
          <Image alt="" src={hero} />
        </div>
        {/* Rolling Banner Section */}
        <div className="border-t-2 border-b-2 py-md mb-24 mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee" style={{willChange: "transform"}}>
            {[0, 1].map((copy) => (
              <p
                key={copy}
                aria-hidden={copy === 1 || undefined}
                className="flex flex-shrink-0 items-center text-3xl font-bold whitespace-nowrap"
              >
                {Array.from({length: 4}).map((_, i) => (
                  <span key={i} className="flex items-center">
                    <span className="px-md">A man can&apos;t have enough basement. swag</span>
                    <span className="mx-3 h-0 w-8 self-center border-4" />
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <section>
          <ProductList addItem={handleAddToCart} products={products} />
        </section>
        <footer className="mx-8 mb-8 flex justify-center">
          <Image alt="" src={footer} />
        </footer>
      </main>
    </div>
  );
};

export default Home;
