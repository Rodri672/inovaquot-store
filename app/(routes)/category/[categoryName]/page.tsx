
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getBrands from "@/actions/get-brands";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";
import Sort from "@/components/ui/sort";
import ClientCategoryPage from "./client-category-page";
import { Suspense } from "react";
import getBillboard from "@/actions/get-billboard";
export const revalidate = 0

interface CategoryPageProps {
    params: {
        categoryName: string
    },
    searchParams: {
        colorId?: string
        brandId?: string
        sort?: string;
    }
}
const sortOptions = [
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name: A to Z", value: "name-asc" },
    { label: "Name: Z to A", value: "name-desc" },

];

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {

    const category = await getCategory(params.categoryName);
    if (!category) {
        
        return <div>Categoria não encontrada</div>;
    }

    const products = await getProducts({
        categoryId: category.id,
        colorId: searchParams.colorId,
        brandId: searchParams.brandId
    });
    const brands = await getBrands();
    const colors = await getColors();

    const billboard = await getBillboard("fb25d12c-00cf-4185-826e-7d6dcdd20b0e");

    return (
        <Suspense>
            <div className="bg-white">
                <Container>
                    <Billboard data={billboard} />
                    <div className="px-4 sm:px-6 lg:px-8 pb-24">
                        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                            <MobileFilters brands={brands} colors={colors} />
                            <div className="hidden lg:block">
                                <Filter valueKey="brandId" name="Brands" data={brands} />
                                <Filter valueKey="colorId" name="Colors" data={colors} />

                                <Sort
                                    options={sortOptions}
                                    name="Sort By"
                                    valueKey="sort"
                                />
                            </div>
                            <Suspense>
                                <ClientCategoryPage
                                    products={products}
                                    sort={searchParams.sort}
                                />
                            </Suspense>

                        </div>
                    </div>
                </Container>
            </div>
        </Suspense>
    );
}

export default CategoryPage;