import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (name: string): Promise<Category | null> => {
    const res = await fetch(`${URL}?name=${encodeURIComponent(name)}`);
    const categories: Category[] = await res.json();
    
    const category: Category | undefined = categories.find((category: Category) => category.name === name);
    return category || null;
}

export default getCategory;
