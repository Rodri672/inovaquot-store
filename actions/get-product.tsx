import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (productName: string): Promise<Product> => {
    const res = await fetch(`${URL}/${productName}`);

    return res.json();
}

export default getProduct;
