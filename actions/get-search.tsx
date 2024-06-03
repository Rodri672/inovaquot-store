import { Product } from "@/types";
import qs from "query-string";

const getSearch = async (storeId: string, searchQuery: string): Promise<Product[]> => {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/${storeId}/products/search`;
    const url = qs.stringifyUrl({
        url: baseURL,
        query: { q: searchQuery }
    });

    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export default getSearch;
