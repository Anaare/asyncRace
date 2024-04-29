import React, { useState, useEffect } from "react";
import { CarData } from "./Garage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPenToSquare,
  faTrash,
  faCarSide,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

export interface CarProps {
  car: CarData;
  onEdit: () => void;
  onDelete: () => void;
  isRacing: boolean;
  engineStatus?: boolean;
  setEngineStatus?: (status: boolean) => void;
}

const Car: React.FC<CarProps> = ({
  car,
  onEdit,
  onDelete,
  isRacing,
  engineStatus,
  setEngineStatus,
}) => {
  const [isDriving, setIsDriving] = useState(false);

  useEffect(() => {
    // Start engine animation when race is active
    if (isRacing && engineStatus) {
      setIsDriving(true);
    } else {
      setIsDriving(false);
    }
  }, [isRacing, engineStatus]);

  const handleStart = () => {
    setIsDriving(true);
    setEngineStatus && setEngineStatus(true); // Start engine
  };

  const handleStop = () => {
    setIsDriving(false);
    setEngineStatus && setEngineStatus(false); // Stop engine
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className={`car-container ${isDriving ? "driving" : ""}`}>
      <h1>{car.name}</h1>
      <div className="car">
        <div className="edit-delete-btn">
          <button className="edit" onClick={onEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="start-stop-btn">
          <button className="start" onClick={handleStart} disabled={isDriving}>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button className="stop" onClick={handleStop} disabled={!isDriving}>
            <FontAwesomeIcon icon={faStop} />
          </button>
        </div>

        <div
          className={`car-icon ${isDriving ? "moving" : ""}`}
          style={{ color: car.color }}
        >
          <FontAwesomeIcon icon={faCarSide} />
        </div>
      </div>
    </div>
  );
};

export default Car;
