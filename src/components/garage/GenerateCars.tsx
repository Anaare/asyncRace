import {
  RandomCars,
  carBrands,
  colors,
  carModels,
} from "./dataForRandomCarGenerator";

interface GenerateCarsProps {
  onGenerateCars: (cars: RandomCars[]) => void;
}

function GenerateCars({ onGenerateCars }: GenerateCarsProps) {
  const generateCars = () => {
    const cars: RandomCars[] = [];

    for (let i = 0; i < 100; i++) {
      const randomBrandIndex = Math.floor(Math.random() * carBrands.length);
      const randomModelIndex = Math.floor(Math.random() * carModels.length);
      const randomColorIndex = Math.floor(Math.random() * colors.length);

      const carData: RandomCars = {
        id: i + 1,
        name: `${carBrands[randomBrandIndex]} ${carModels[randomModelIndex]}`,
        color: colors[randomColorIndex],
      };
      cars.push(carData);
    }

    onGenerateCars(cars);
  };

  return (
    <>
      <button className="generate-cars-btn" onClick={generateCars}>
        Generate Cars
      </button>
    </>
  );
}

export default GenerateCars;
