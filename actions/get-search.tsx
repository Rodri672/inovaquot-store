import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/products/search`;

interface Query {
    categoryId?: string;
    brandId?: string;
    colorId?: string;
    isFeatured?: boolean;
    searchQuery?: string;
}

const getSearch = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            
            q: query.searchQuery
        }
    });

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }

    return res.json();
}

export default getSearch;
