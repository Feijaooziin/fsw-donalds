import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({
  slug,
  imageUrl,
  imageAlt,
  buttonText,
  option,
}: ConsumptionMethodOptionProps) => {
  return (
    <Link href={`/${slug}/menu?consumptionMethod=${option}`} className="">
      <Card>
        <CardContent className="flex flex-col items-center gap-8 py-8">
          <div className="relative h-[80px] w-[80px]">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
            />
          </div>
          <Button className="rounded-full">
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </Link>
    
  );
};

export default ConsumptionMethodOption;
