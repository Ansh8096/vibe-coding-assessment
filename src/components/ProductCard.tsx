import type { Product } from "../types/product";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <div className="flex items-center gap-1">
          {Array.from({ length: product.rating }).map((_, index) => (
            <Star
              key={index}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <p className="text-xl font-bold text-blue-600">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;