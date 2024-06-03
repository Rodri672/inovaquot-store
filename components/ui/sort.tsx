"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SortProps {
    options: { label: string, value: string }[];
    name: string;
    valueKey: string;
}
const Sort: React.FC<SortProps> = ({
    options,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchParams.get(valueKey);

    const onClick = (value: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            [valueKey]: value
        }

        if (current[valueKey] === value) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })

        router.push(url);
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2">
                {options.map((option) => (
                    <div key={option.value} className="flex items-center">
                        <Button
                            className={cn(
                                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                                selectedValue === option.value && "bg-black text-white"
                            )}
                            onClick={() => onClick(option.value)}
                        >
                            {option.label}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sort;