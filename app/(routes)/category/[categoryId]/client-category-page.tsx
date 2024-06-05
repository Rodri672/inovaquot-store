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
  const [isOpen, setIsOpen] = useState(false);
  const OpenNavbar = () => {
    setIsOpen(!isOpen);
  }
  return (

    <div key="container" className="mt-6 lg:col-span-4 lg:mt-0">
      <div key="button" onClick={OpenNavbar} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </div>

      {products.length === 0 && <NoResults key="noresults" />}

      {!isOpen && (
        <div key="col" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sortedProducts.map((item) => (
            <div key={item.id} className="">
              <ProductCard key={item.id} data={item} />
            </div>

          ))}
        </div>
      )}{(
        <div key="list" className="grid grid-cols-1">
          {sortedProducts.map((item) => (
            <div key={item.name} className=" w-max ">
              <ProductCard key={item.name} data={item} />
            </div>

          ))}
        </div>
      )}


    </div>
  );
};

export default ClientCategoryPage;