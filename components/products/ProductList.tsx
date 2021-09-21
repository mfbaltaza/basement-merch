import {Product, SProduct} from "../../product/types";

import ProductCard from "./ProductCard";

interface Props {
  products: SProduct[];
  cartItems: Product[];
  setCartItems: (x: any[]) => void;
}

const ProductList: React.FC<Props> = ({products, cartItems, setCartItems}) => {
  return (
    <div className="w-auto mx-8 flex flex-col md:flex-row gap-x-8 mb-12 flex-grow justify-center">
      {products.length === 0 && <p className="text-4xl">Cart is Empty</p>}
      {products.map((product: SProduct) => (
        <ProductCard
          key={product.id}
          cartItems={cartItems}
          product={product}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;
