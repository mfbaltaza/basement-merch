import {Product} from "../../product/types";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  cartItems: Product[];
  setCartItems: (x: any[]) => void;
}

const ProductList: React.FC<Props> = ({products, cartItems, setCartItems}) => {
  return (
    <div>
      {products.length === 0 && <p className="text-4xl">Cart is Empty</p>}
      {products.map((product: Product) => (
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
