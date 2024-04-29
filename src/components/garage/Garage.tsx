import { useState } from "react";
import Create from "./Create";
import Update from "./Update";
import RaceButton from "./Race";
import GenerateCars from "./GenerateCars";
import Car from "./Car";
import Pagination from "../Pagination";
import ResetButton from "./Reset";

export interface CarData {
  name: string;
  color: string;
  id: number;
}

function Garage() {
  const [localCars, setLocalCars] = useState<CarData[]>([]); // Initialize with an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [isRacing, setIsRacing] = useState(false);
  const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
  const [engineStatus, setEngineStatus] = useState<{ [key: number]: boolean }>(
    {}
  );
  const carsPerPage = 7;

  // No need to fetch data from the server initially

  const handleCarCreation = (carData: CarData) => {
    setLocalCars([...localCars, carData]);
  };

  const handleEdit = (index: number) => {
    setSelectedCarIndex(index);
  };

  const handleUpdateCar = (newName: string, newColor: string) => {
    if (selectedCarIndex !== null) {
      setLocalCars((prevCars) =>
        prevCars.map((car, index) =>
          index === selectedCarIndex
            ? { ...car, name: newName, color: newColor }
            : car
        )
      );
    }
  };

  const handleDelete = (index: number) => {
    const updatedCars = [...localCars];
    updatedCars.splice(index, 1);
    setLocalCars(updatedCars);
  };

  const toggleRace = () => {
    if (!isRacing) {
      const newEngineStatus: { [key: number]: boolean } = {};
      localCars.forEach((car) => {
        newEngineStatus[car.id] = true;
      });
      setEngineStatus(newEngineStatus);
    } else {
      setEngineStatus({});
    }
    setIsRacing((prevState) => !prevState);
  };

  const handleGenerateCars = (cars: CarData[]) => {
    setLocalCars(cars);
  };
  return (
    <div>
      <Create onCreateCar={handleCarCreation} />
      <Update onUpdateCar={handleUpdateCar} />
      <div className="container">
        <RaceButton onClick={toggleRace} isRacing={isRacing} />
        <ResetButton onClick={toggleRace} isRacing={isRacing} />
        <GenerateCars onGenerateCars={handleGenerateCars} />
        <div className="page-data">
          <p>Garage({localCars.length})</p>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(localCars.length / carsPerPage)}
            onNextPage={() =>
              setCurrentPage((prevPage) =>
                Math.min(
                  prevPage + 1,
                  Math.ceil(localCars.length / carsPerPage)
                )
              )
            }
            onPrevPage={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
          />
        </div>
        {localCars
          .slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage)
          .map((car, index) => (
            <Car
              key={index}
              car={car}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
              isRacing={isRacing}
              engineStatus={engineStatus[car.id]}
              setEngineStatus={(status) =>
                setEngineStatus({ ...engineStatus, [car.id]: status })
              }
            />
          ))}
      </div>
    </div>
  );
}

export default Garage;
