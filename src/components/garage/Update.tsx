import { useState } from "react";
interface UpdateProps {
  onUpdateCar: (newName: string, newColor: string) => void; // Specify the prop type
}
function Update({ onUpdateCar }: UpdateProps) {
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("#000000");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColor(event.target.value);
  };
  const handleUpdate = () => {
    onUpdateCar(newName, newColor);
    setNewName("");
    setNewColor("#000000");
  };
  return (
    <div className="update-btn-div">
      <input
        type="text"
        className="user-input-update"
        placeholder="Car Brand"
        value={newName}
        onChange={handleNameChange}
      />
      <input
        type="color"
        className="color-picker"
        value={newColor}
        onChange={handleColorChange}
      />
      <button className="update-btn" onClick={handleUpdate}>
        Update Car
      </button>
    </div>
  );
}
export default Update;
