import type {NextPage} from "next";
import Image from "next/image";
import {useState} from "react";

import {Product} from "../product/types";

import data from "product/mock.json";
import Cart from "components/Cart";
import addToCart from "@assets/addtocard.svg";
import logo from "@assets/logo.svg";
import altlogo from "@assets/altlogo.svg";
import hero from "@assets/header.svg";
import hd4k from "@assets/hd-4k.svg";
import footer from "@assets/footer.svg";
import shirt from "@assets/products/shirt.png";
import hoodie from "@assets/products/hoodie.png";
import cap from "@assets/products/cap.png";

/* eslint-disable */

const Home: NextPage = () => {
  const [cartItems, setCartItems] = useState([{
    "id": "black-tshirt",
    "image": "/products/shirt.png",
    "price": 7.95,
    "name": "Black t-shirt",
    "description": "Unisex Basic Softstyle T-Shirt",
    "options": [{
      "label": "size",
      "values": ["S", "M", "L", "XL"]
    }]
  },]);

  const [cartCount, setCartCount] = useState(0);
  const [cartVisibility, setCartVisibility] = useState(false);

  const [...products] = data;

  function onClick() {
    // setCartCount((prev) => setCartCount(prev + 1));
    console.log("Working");
  }

  return (
    <div className="overflow-x-hidden">
      {cartVisibility && <Cart setCartVisibility={setCartVisibility} cartItems={cartItems} />}
      <nav className="mx-8 mt-8 flex justify-between">
        <div className="hidden md:block">
          <Image alt="Basement" src={logo} />
        </div>
        <div className="h-8 md:hidden">
          <Image alt="Basement" src={altlogo} height="40" width="40" />
        </div>
        <div className="hidden md:block">
          <Image alt="High Definition" src={hd4k} />
        </div>
        <button className="border-2 h-max rounded-full px-lg py-xs"
                onClick={() => setCartVisibility(true)}>
                  Cart ({cartItems.length})
        </button>
      </nav>
      <main>
        {/* Hero Section */}
        <div className="w-auto mx-8 my-11">
          <Image alt="Basement Supply" src={hero} />
        </div>
        {/* Rolling Banner Section */}
        {/* <div className="border-t-2 border-b-2 py-md mb-24 mt-12 max-h-16 flex justify-around">
          <p className="animate-ticker flex justify-center text-3xl font-bold px-md w-full whitespace-nowrap">
            A man can't have enough basement. swag
          <div className="container h-0 w-8 mx-3 border-4 self-center "></div> 
          </p>
        </div> */}
        <div className="border-t-2 border-b-2 py-md mb-24 mt-12 max-h-16 flex justify-around whitespace-nowrap overflow-hidden">
          <p id="ticker" className="animate-ticker flex justify-center text-3xl font-bold px-md w-full">
            {"A man can't have enough basement. swag  "}
            <div className="container h-0 w-8 mx-3 border-4 self-center "></div>
            {"A man can't have enough basement. swag  "}
            <div className="container h-0 w-8 mx-3 border-4 self-center "></div>
          </p>
      </div>
        
        {/* Products Section */}
        <section className="w-auto mx-8 flex flex-col md:flex-row gap-x-8 mb-12 flex-grow">
          <div className="product-1" onClick={() => {
            const exist = cartItems.find(x => x.id === products[1].id)
            if (exist) {
              console.log("There is already merch champ");
            } else { setCartItems([...cartItems, {...products[1]}]) }
          }}>
            <div className="cursor-pointer group bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg relative">
              <Image alt="Basement Shirt" src={shirt} />
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-56 right-7 sm:left-1/4 ">
                <Image alt="Add To Cart" src={addToCart} />
              </div>
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black t-shirt</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
          <div className="product-2" onClick={() => {
          const exist = cartItems.find(x => x.id === products[1].id)
          if (exist) {
            console.log("There is already merch champ");
          } else { setCartItems([...cartItems, {...products[1]}]) }
        }}>
            <div className="cursor-pointer group relative bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image alt="Basement Hoodie" src={hoodie} />
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-56 right-7 sm:left-1/4 ">
                <Image alt="Add To Cart" src={addToCart} />
              </div>
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black hoodie</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
          <div className="product-3" onClick={() => {
            const exist = cartItems.find(x => x.id === products[2].id)
            if (exist) {
              console.log("There is already merch champ");
            } else { setCartItems([...cartItems, {...products[2]}]) }
          }}>
            <div className="cursor-pointer group relative bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image alt="Basement Cap" src={cap} />
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-56 right-7 sm:left-1/4 ">
                <Image alt="Add To Cart" src={addToCart} />
              </div>
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black cap</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
        </section>
        <footer className="mx-8 mb-8 flex">
          <Image alt="Wear Everyday" src={footer} />
        </footer>
      </main>
    </div>
  );
};

export default Home;
