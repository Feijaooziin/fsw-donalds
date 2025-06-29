import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

const RestaurantsMap = async () => {
    const restaurant = await db.restaurant.findMany();
    
    return ( 
        <div className="flex flex-col items-start jusitfy-center gap-5 mx-3">
            {restaurant.map((item) => (
                <div key={item.id} className="flex flex-col justify-center">
                    {/* ESQUERDA */}
                    <Button className="rounded-xl text-xl h-full p-2 flex items-center w-fit">
                        <Link href={`./${item?.slug}/`} className="flex gap-6 items-center">
                            {item?.name}
                            <div className="relative min-h-[36px] min-w-[36px]">
                            <Image
                            src={item?.avatarImageUrl}
                                alt={item?.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        </Link>
                    </Button>
                    <p className="text-lg line-clamp-2 font-medium text-gray-500">{item.description}</p>        
                </div>
            ))}
        </div>
    );
}
 
export default RestaurantsMap;
