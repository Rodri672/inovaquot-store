import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    brandId?: string;
    colorId?: string;
    name?: string;
    isFeatured?: boolean;
    
}

const getSearch = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            brandId: query.brandId,
            colorId: query.colorId,
            name: query.name,
            isFeatured: query.isFeatured
        }
    });

    const res = await fetch(url);

    return res.json();
}

export default getSearch;