import type {NextPage} from "next";
import Image from "next/image";

import logo from "@assets/logo.svg";
import hero from "@assets/header.svg";
import hd4k from "@assets/hd-4k.svg";
import footer from "@assets/footer.svg";
import shirt from "@assets/products/shirt.png";
import hoodie from "@assets/products/hoodie.png";
import cap from "@assets/products/cap.png";

const Home: NextPage = () => {
  return (
    <div className="">
      {/* Nav */}
      <header className="w-auto mx-8 mt-8 flex justify-between max-h-max">
        <Image src={logo} />
        <Image src={hd4k} />
        <button className="border-2 rounded-full px-lg py-xs">Cart (0)</button>
      </header>
      <main>
        {/* Hero Section */}
        <div className="w-auto mx-8 my-11">
          <Image src={hero} />
        </div>
        {/* Rolling Banner Section */}
        <div className="border-t-2 border-b-2 py-md mb-24 mt-12 flex justify-around">
          <p className="flex justify-center text-3xl font-bold px-md">
            A man can't have enough basement. swag
          </p>
          <div className="container h-0 w-8 border-4 self-center" />
          <p className="flex justify-center text-3xl font-bold px-md">
            A man can't have enough basement. swag
          </p>
        </div>
        {/* Products Section */}
        <section className="w-auto mx-8 flex gap-x-8 mb-12 flex-grow ">
          <div className="product-1">
            <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image src={shirt} />
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black t-shirt</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
          <div className="product-2">
            <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image src={hoodie} />
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black hoodie</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
          <div className="product-3">
            <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
              <Image src={cap} />
            </div>
            <div className="flex justify-between py-sm text-center">
              <p className="text-xl font-bold">Black cap</p>
              <p className="text-xl font-bold">$7.95</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="mx-8 mb-8 flex">
          <Image src={footer} />
        </footer>
      </main>
    </div>
  );
};

export default Home;
