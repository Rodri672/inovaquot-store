"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ClientCategoryPageProps {
  products: Product[];
  sort?: string;
}

const ClientCategoryPage: React.FC<ClientCategoryPageProps> = ({
  products,
  sort,
}) => {
  const [sortedProducts, setSortedProducts] = useState<Product[]>(products);

  useEffect(() => {
    let sorted = [...products];
    switch (sort) {
      case "price-asc":
        sorted = sorted.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price-desc":
        sorted = sorted.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "name-asc":
        sorted = sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted = sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        sorted = products;
        break;
    }
    setSortedProducts(sorted);
  }, [sort, products]);

  return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ClientCategoryPage;