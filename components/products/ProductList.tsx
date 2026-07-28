import {Product} from "../../product/types";

import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  addItem: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({products, addItem}) => {
  return (
    <div className="w-auto mx-8 flex flex-col md:flex-row gap-x-8 mb-12 flex-grow justify-center">
      {products.map((product: Product) => (
        <ProductCard key={product.id} addItem={addItem} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
