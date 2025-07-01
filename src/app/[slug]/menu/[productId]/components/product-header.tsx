"use client"
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, 'name' | 'imageUrl'>;
}

const ProductsHeader = ({product}: ProductHeaderProps) => {
    const router = useRouter();
      const handleBackClick = () => {
        router.back();
      };
      
    return ( 
        <div className="relative w-ful h-[300px]">

                <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-5 top-10 z-50 rounded-full"
                    onClick={handleBackClick}
                >
                    <ChevronLeftIcon />
                </Button>

                <Image src={product.imageUrl} alt={product.name} fill
                    className="object-contain"
                />

                <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-5 top-10 z-50 rounded-full"
                >
                    <ScrollTextIcon />
                </Button>
            </div>
     );
}
 
export default ProductsHeader;