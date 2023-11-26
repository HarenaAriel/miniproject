import { useEffect, useState } from "react";
import RequestQuery from "../models/RequestQuery";
import { useNavigate } from "react-router-dom";

function useFetch({ url, method, body, headers }: RequestQuery) {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const catchError = (error: any) => {
    if (error.name === "AbortError") {
      console.log("fetch aborted");
    } else {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const abortEff = new AbortController();

    if (method && (method === "POST" || method === "PUT")) {
      fetch(url, {
        method: method,
        body: body,
        headers: headers,
        signal: abortEff.signal,
      })
        .then(() => {
          setIsLoading(false);
          setError(null);
          navigate("/");
        })
        .catch((error) => catchError(error));
    } else if (method && method === "DELETE") {
      fetch(url, { method: method, signal: abortEff.signal })
        .then(() => {
          setIsLoading(false);
          setError(null);
          navigate("/");
        })
        .catch((error) => catchError(error));
    } else {
      fetch(url, { signal: abortEff.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not load data from server");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => catchError(error));
    }
  }, [url, method, body, headers, navigate]);

  return { data, isLoading, error };
}

export { useFetch };
