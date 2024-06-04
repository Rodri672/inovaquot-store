import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getSearch from "@/actions/get-search";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getSearch({ });
    const billboard = await getBillboard("fb25d12c-00cf-4185-826e-7d6dcdd20b0e");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Products Found" items={products} />
                    
                </div>
            </div>
        </Container>
    );
}
 
export default HomePage;