import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data can not be fetched!");
        }
        return response.json();
      })
      .then((responseData) => {
        if (isMounted) {
          setData(responseData);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error.message);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return [data, error];
}

export default useFetch;
