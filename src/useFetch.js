import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource"); //izpisva, kogato data ot servera ne suvpada sus zaiavkata
        }

        return res.json();
      })
      .then((data) => {
        setData(data); //zadava state na blogs s informaciata ot data -jsona
        setIsPending(false); //predi dase zaredi zaiavkata ot servera shte pokazva loading
        setError(null); // ako zaiavkata e OK err e Null
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false); // kogato ima err state na IsPending e false - ne se pokazva "loading"
          setError(err.massage);
        }
      });
    return () => abortCont.abort();
  }, [url]); // pri vsiaka promqna na url shte proveriava i vrushta data, isPending ili error
  return { data, isPending, error };
};
export default useFetch;
