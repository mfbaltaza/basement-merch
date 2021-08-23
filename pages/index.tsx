import type {NextPage} from "next";
import Image from "next/image";
import {useState} from "react";

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
  const [cartCount, setCartCount] = useState(0);

  function onClick() {
    // setCartCount((prev) => setCartCount(prev + 1));
    console.log("Working");
    
  }

  return (
    <div className="">
      <header className="mx-8 mt-8 flex justify-between max-h-max">
        <div className="hidden md:block">
          <Image alt="Basement" src={logo} />
        </div>
        <div className="md:hidden">
          <Image alt="Basement" src={altlogo} />
        </div>
        <div className="hidden md:block">
          <Image alt="High Definition" src={hd4k} />
        </div>
        <button className="border-2 h-max rounded-full px-lg py-xs">Cart ({cartCount})</button>
      </header>
      <main>
        {/* Hero Section */}
        <div className="w-auto mx-8 my-11">
          <Image alt="Basement Supply" src={hero} />
        </div>
        {/* Rolling Banner Section */}
        <div className="border-t-2 border-b-2 py-md mb-24 mt-12 flex justify-around">
          <p className="flex justify-center text-3xl font-bold px-md animate-ticker">
            A man can't have enough basement. swag
          </p>
          <div className="container h-0 w-8 border-4 self-center animate-ticker" />
          <p className="flex justify-center text-3xl font-bold px-md animate-ticker">
            A man can't have enough basement. swag 
          </p>
        </div>
        {/* Products Section */}
        <section className="w-auto mx-8 flex flex-col md:flex-row gap-x-8 mb-12 flex-grow ">
          <div className="product-1" onClick={onClick}>
            <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image alt="Basement Shirt" src={shirt} />
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black t-shirt</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
          <div className="product-2" onClick={onClick}>
            <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image alt="Basement Hoodie" src={hoodie} />
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black hoodie</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
          <div className="product-3" onClick={onClick}>
            <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image alt="Basement Cap" src={cap} />
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
