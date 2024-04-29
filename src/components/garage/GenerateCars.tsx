import axios from "axios";
import Car from "./Car";
import dataForRandomCarGenerator from "./dataForRandomCarGenerator.tsx";

interface GenerateCarsProps {
  onGenerateCars: (cars: JSX.Element[]) => void;
}

function GenerateCars({ onGenerateCars }: GenerateCarsProps) {
  function generateCars() {
    const carsElements: JSX.Element[] = dataForRandomCarGenerator.map(
      (car: any, index: number) => {
        axios
          .post("http://localhost:3000/garage", car)
          .then((response) => {
            console.log("Car data sent:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        return (
          <Car
            key={index}
            car={{ id: car.id, color: car.color, name: car.brand }}
            onEdit={() => {}}
            onDelete={() => {}}
            isRacing={false}
          />
        );
      }
    );

    onGenerateCars(carsElements);
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
