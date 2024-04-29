import React from "react";
interface RaceButtonProps {
  onClick: () => void;
  isRacing: boolean;
}
const RaceButton: React.FC<RaceButtonProps> = ({ onClick, isRacing }) => {
  return (
    <button className="race-btn" onClick={onClick}>
      {isRacing} Race
    </button>
  );
};
export default RaceButton;
