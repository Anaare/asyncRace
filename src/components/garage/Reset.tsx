import React from "react";
interface RaceButtonProps {
  onClick: () => void;
  isRacing: boolean;
}
const ResetButton: React.FC<RaceButtonProps> = ({ onClick, isRacing }) => {
  return (
    <button className="reset-btn" onClick={onClick}>
      {!isRacing} Reset
    </button>
  );
};

export default ResetButton;
