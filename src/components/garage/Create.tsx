import React, { useState } from "react";
import axios from "axios";

interface CreateProps {
  onCreateCar: (car: { name: string; color: string; id: number }) => void;
}

const Create: React.FC<CreateProps> = ({ onCreateCar }) => {
  const [carName, setCarName] = useState("");
  const [carColor, setCarColor] = useState("#000000");

  const handleCreateCar = () => {
    const newCarId = Date.now();
    const newCar = { id: newCarId, name: carName, color: carColor };
    onCreateCar(newCar);
    setCarName("");
    setCarColor("#000000");
    axios
      .post("http://localhost:3000/garage", newCar)
      .then((response) => {
        const createdCar = response.data;
        onCreateCar(createdCar);
        setCarName("");
        setCarColor("#000000");
        console.log(createdCar);
      })
      .catch((error) => {
        console.error("Error creating car:", error);
      });
  };

  return (
    <div className="create-btn-div">
      <input
        type="text"
        className="user-input-create"
        placeholder="Car Brand"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <input
        type="color"
        className="color-picker"
        value={carColor}
        onChange={(e) => setCarColor(e.target.value)}
      />
      <button className="create-btn" onClick={handleCreateCar}>
        Create Car
      </button>
    </div>
  );
};

export default Create;
