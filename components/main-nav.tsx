"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import queryString from "query-string";
interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        id:route.id,
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));


    return (
        <nav
            className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
            {routes.map((route) => (
                <Link
                
                    key={route.href}
                    href={`/category/${route.label}/${route.id}`}                
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
              <Link
                    key="relatorio"
                    href="/relatorio"
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        "/relatorio" ? "text-black" : "text-neutral-500"
                    )}
                >
                    Relatorio
                </Link>
        </nav>
    );
}
 
export default MainNav;