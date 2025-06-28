import Link from "next/link";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 p-5">
      <Button className="w-fit rounded-full text-3xl" asChild>
        <Link href={"./fsw-donalds"}>FSW DONALDS</Link>
      </Button>

      <Button className="w-fit rounded-full text-3xl" asChild>
        <Link href={"./feijao-burguer"}>FEIJAO BURGUER</Link>
      </Button>
    </div>
  );
};

export default HomePage;
