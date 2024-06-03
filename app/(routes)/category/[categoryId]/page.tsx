
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getBrands from "@/actions/get-brands";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import Filter from "./components/filter";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { Combobox } from "@/components/ui/combobox";
import Sort from "@/components/ui/sort";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Product } from "@/types";

export const revalidate = 0

interface CategoryPageProps {
    params: {
        categoryId: string
    },
    searchParams: {
        colorId: string
        brandId: string
        sort: string;
    }
}
const sortOptions = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },
    { label: "Popularity", value: "popularity" }
];

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
 
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        brandId: searchParams.brandId
    });
    const brands = await getBrands();
    const colors = await getColors();
    const category = await getCategory(params.categoryId);

    useEffect(() => {
        const sortKey = searchParams.sort;
        let sorted = products; 
        switch (sortKey) {
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
    }, [searchParams, products]);
    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters brands={brands} colors={colors} />
                        <div className="hidden lg:block">
                            <Filter valueKey="brandId" name="Brands" data={brands} />
                            <Filter valueKey="colorId" name="Colors" data={colors} />
                            <Combobox ></Combobox>
                            <Sort
                                options={sortOptions}
                                name="Sort By"
                                valueKey="sort"
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {sortedProducts.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {sortedProducts.map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;