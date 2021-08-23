import React from "react";
// import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Product(props: Object) {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-newDark border-b-4 min-width-xs max-w-lg">
<<<<<<< HEAD
        {/* <Image alt="Shop Item" src={props.img} /> */}
=======
       {/* <Image alt="Shop Item" src={props.img} /> */}
>>>>>>> 0b070d18623af2c2b15edcb825c8932e613ed42d
      </div>
      <div className="flex justify-between py-sm text-center">
        <p className="text-xl font-bold">{/*Item Name*/}</p>
        <p className="text-xl font-bold">{/*Item Price*/}</p>
      </div>
    </div>
  );
}

export default Product;
