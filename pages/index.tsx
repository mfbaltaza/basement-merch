import type {NextPage} from "next";
import Image from "next/legacy/image";
import {useState} from "react";

import data from "product/mock.json";
import Cart from "components/Cart";
import logo from "@assets/logo.svg";
import altlogo from "@assets/altlogo.svg";
import hero from "@assets/header.svg";
import hd4k from "@assets/hd-4k.svg";
import footer from "@assets/footer.svg";
import ProductList from "components/products/ProductList";

const Home: NextPage = () => {
  const handleCartClick = () => {
    document.body.style.overflow = "hidden";
    setCartVisibility(true);
  };

  const [cartItems, setCartItems] = useState([
    {
      id: "black-tshirt",
      image: "/products/shirt.png",
      price: 7.95,
      name: "Black t-shirt",
      description: "Unisex Basic Softstyle T-Shirt",
      options: [
        {
          label: "size",
          values: ["S", "M", "L", "XL"],
        },
      ],
      qty: 1,
    },
  ]);

  const [cartVisibility, setCartVisibility] = useState(false);

  const [...products] = data;

  return (
    <div className="overflow-x-hidden">
      {cartVisibility && (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
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
          <Image alt="High Definition" src={hd4k} />
        </div>
        <button className="border-2 h-max rounded-full px-lg py-xs" onClick={handleCartClick}>
          CART ({cartItems.length})
        </button>
      </nav>
      <main>
        {/* Hero Section */}
        <div className="w-auto mx-8 my-11 flex justify-center">
          <Image alt="Basement Supply" src={hero} />
        </div>
        {/* Rolling Banner Section */}
        <div className="border-t-2 border-b-2 py-md mb-24 mt-12 max-h-16 flex justify-around whitespace-nowrap overflow-hidden">
          <p
            className="animate-ticker flex justify-center text-3xl font-bold px-md w-full"
            id="ticker"
          >
            {"A man can't have enough basement. swag  "}
            <span className="container h-0 w-8 mx-3 border-4 self-center " />
            {"A man can't have enough basement. swag  "}
            <span className="container h-0 w-8 mx-3 border-4 self-center " />
          </p>
        </div>

        {/* Products Section */}
        <section>
          <ProductList cartItems={cartItems} products={products} setCartItems={setCartItems} />
        </section>
        <footer className="mx-8 mb-8 flex justify-center">
          <Image alt="Wear Everyday" src={footer} />
        </footer>
      </main>
    </div>
  );
};

export default Home;
