import { useSearchParams } from 'next/navigation';
import getBillboard from "@/actions/get-billboard";
import getSearch from "@/actions/get-search";
import Billboard from "@/components/billboard";
import ProductList from '@/components/product-list';
import Container from "@/components/ui/container";



const SearchPage = async () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q') || '';
    
try{
    const products = await getSearch({ searchQuery });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title={`Results for "${searchQuery}"`} items={products} />
                    
                </div>
            </div>
        </Container>
    );
}catch(error) {
    console.error('Error fetching search results:', error);
    
    console.error('API error:', error);
        return <div>Error fetching search results. Please try again later.</div>;

}
    
}
 
export default SearchPage;