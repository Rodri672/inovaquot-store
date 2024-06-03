"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'next/navigation';
import getSearch from '@/actions/get-search';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import { Product } from '@/types';

const SearchPage = () => {
    const searchParams = useSearchParams();
    const { storeId: rawStoreId } = useParams<{ storeId: string | string[] }>(); // Handle storeId as string or string[]
    const searchQuery = searchParams.get('q') || '';
    const [products, setProducts] = useState<Product[]>([]);

    const storeId = Array.isArray(rawStoreId) ? rawStoreId[0] : rawStoreId; // Ensure storeId is a string

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (storeId) { // Ensure storeId is available
                    const products = await getSearch(storeId, searchQuery);
                    setProducts(products);
                }
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
