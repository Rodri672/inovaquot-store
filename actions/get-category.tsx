import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (name: string): Promise<Category> => {
    const res = await fetch(`${URL}?name=${encodeURIComponent(name)}`);
    const categories = await res.json();
    return categories.length > 0 ? categories[0] : null;
}

export default getCategory;