import RestaurantsMap from "./_components/restaurants";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* CABEÇALHO */}
      <div className="flex flex-col w-full justify-center pt-2 px-3 bg-orange-400">
        <h1 className="text-3xl font-bold">
          CABEÇALHO
        </h1>
      </div>

      {/* MAIN */}
      <div className="flex flex-col justify-between h-full bg-blue-500">
        <div className="bg-pink-300">
          <div className="mx-3 mt-16">
            <h1 className="text-4xl mb-12 font-bold">
              ESCOLHA ONDE QUER PEDIR
            </h1>
          </div>
          <RestaurantsMap/>
        </div>
        
        {/* RODAPÉ */}
        <div className="flex flex-col w-full justify-center pt-2 px-3 bg-orange-400">
          <h1 className="text-3xl font-bold">
            RODAPÉ
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
