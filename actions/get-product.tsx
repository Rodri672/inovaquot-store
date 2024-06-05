import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (productName: string): Promise<Product | null> => {
    const res = await fetch(`${URL}?name=${encodeURIComponent(productName)}`);
    const products: Product[] = await res.json();
    
    const product: Product | undefined = products.find((product: Product) => product.name === productName);
    return product || null;
}

export default getProduct;
