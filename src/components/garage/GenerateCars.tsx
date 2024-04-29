import { RandomCars, carBrands, colors } from "./dataForRandomCarGenerator";

interface GenerateCarsProps {
  onGenerateCars: (cars: RandomCars[]) => void;
}

function GenerateCars({ onGenerateCars }: GenerateCarsProps) {
  function generateCars() {
    const cars: RandomCars[] = [];

    for (let i = 0; i < 100; i++) {
      const carData: RandomCars = {
        id: i + 1,
        name: getRandomCar(carBrands),
        color: getRandomCar(colors),
      };
      cars.push(carData);
    }

    onGenerateCars(cars);
  }

  function getRandomCar(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return (
    <>
      <button className="generate-cars-btn" onClick={generateCars}>
        Generate Cars
      </button>
    </>
  );
}

export default GenerateCars;
