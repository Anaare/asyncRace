import { useEffect, useState } from "react";

interface Car {
  id: number;
  name: string;
  color: string;
}
function useFetch(url: string): [Car[] | null, string | null] {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data can not be fetched!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return [data, error];
}

export default useFetch;
