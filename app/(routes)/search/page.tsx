"use client";
import { useSearchParams } from 'next/navigation';
import getSearch from "@/actions/get-search";
import Container from "@/components/ui/container";
import ProductList from '@/components/product-list';

const SearchPage = async () => {
    const searchParams = useSearchParams();
    const storeId = searchParams.get('storeId') || ''; 
    const searchQuery = searchParams.get('q') || '';

    try {
        const products = await getSearch(storeId, searchQuery);

        return (
            <Container>
                <div className="space-y-10 pb-10">
                    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                        <ProductList title={`Results for "${searchQuery}"`} items={products} />
                    </div>
                </div>
            </Container>
        );
    } catch (error) {
        console.error('Error fetching search results:', error);
        return <div>Error fetching search results. Please try again later.</div>;
    }
}

export default SearchPage;
