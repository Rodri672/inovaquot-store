"use client"
import React, { useEffect, useState } from 'react';
import getSearch from '@/actions/get-search';
import { useSearchParams } from 'next/navigation';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import { Product } from '@/types'; 

const SearchPage = ({ storeId }: { storeId: string }) => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('q') || '';
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getSearch(storeId, searchQuery);
                setProducts(products);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchProducts();
    }, [storeId, searchQuery]);

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title={`Results for "${searchQuery}"`} items={products} />
                </div>
            </div>
        </Container>
    );
};

export default SearchPage;
