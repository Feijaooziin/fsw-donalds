import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1 className="text-red-500">Olá Mundo!</h1>
      <Input placeholder="Oie" />
      <Button>Testando</Button>
    </div>
  );
};

export default HomePage;
