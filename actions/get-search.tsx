import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

interface Query {
    categoryId?: string;
    brandId?: string;
    colorId?: string;
    isFeatured?: boolean;
    searchQuery?: string;
}

const getSearch = async (storeId: string, searchQuery: string): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: `${URL}/${storeId}/products/search`,
        query: {
            q: searchQuery
        }
    });

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export default getSearch;
