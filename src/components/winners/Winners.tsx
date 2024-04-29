import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Define types for your winners
type Winner = {
  carNumber: number;
  car: JSX.Element;
  brand: string;
  wins: number;
  bestTime: number;
};

function Winners() {
  const [sortBy, setSortBy] = useState<{ key: string | null; order: string }>({
    key: null,
    order: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const winnersPerPage = 7;
  const [winners, setWinners] = useState<Winner[]>([]); // Specify the type here

  // Function to update winners state
  const updateWinners = () => {
    const initialWinners: Winner[] = [
      {
        carNumber: 1,
        car: <FontAwesomeIcon icon={faCarSide} style={{ color: "red" }} />,
        brand: "Mustung",
        wins: 5,
        bestTime: 120,
      },
      {
        carNumber: 2,
        car: <FontAwesomeIcon icon={faCarSide} style={{ color: "blue" }} />,
        brand: "Tesla",
        wins: 3,
        bestTime: 110,
      },
      {
        carNumber: 3,
        car: <FontAwesomeIcon icon={faCarSide} style={{ color: "yellow" }} />,
        brand: "Mercedes",
        wins: 7,
        bestTime: 130,
      },
      {
        carNumber: 4,
        car: <FontAwesomeIcon icon={faCarSide} style={{ color: "green" }} />,
        brand: "BMW",
        wins: 5,
        bestTime: 90,
      },
    ];
    setWinners(initialWinners);
  };

  // Call updateWinners to initialize the winners state
  useEffect(() => {
    updateWinners();
  }, []); // Empty dependency array ensures it only runs once on component mount

  const handleSort = (key: string) => {
    if (sortBy.key === key) {
      setSortBy({ ...sortBy, order: sortBy.order === "asc" ? "desc" : "asc" });
    } else {
      setSortBy({ key, order: "asc" });
    }
  };

  const sortedWinners = [...winners].sort((a, b) => {
    const aValue = sortBy.key === "wins" ? a.wins : a.bestTime;
    const bValue = sortBy.key === "wins" ? b.wins : b.bestTime;
    if (aValue === bValue) return 0;
    return sortBy.order === "asc"
      ? aValue > bValue
        ? 1
        : -1
      : aValue < bValue
      ? 1
      : -1;
  });

  const totalPages = Math.ceil(winners.length / winnersPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <>
      <div className="page-data">
        <p>Total Winners: {winners.length}</p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      </div>

      <table className="winners-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("carNumber")}>Car №</th>
            <th onClick={() => handleSort("car")}>Car</th>
            <th onClick={() => handleSort("brand")}>Brand</th>
            <th onClick={() => handleSort("wins")} className="sort">
              Number of Wins
            </th>
            <th onClick={() => handleSort("bestTime")} className="sort">
              Best Time in Seconds
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedWinners.map((winner, index) => (
            <tr key={index}>
              <td>{winner.carNumber}</td>
              <td>{winner.car}</td>
              <td>{winner.brand}</td>
              <td>{winner.wins}</td>
              <td>{winner.bestTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Winners;
