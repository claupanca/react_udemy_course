import { useState, useEffect } from "react";

export default function useSessionStorage(initialState) {
  const [watched, setWatched] = useState(initialState);

  function getWatched() {
    console.log("aaaa", sessionStorage.getItem("watched"));
    return sessionStorage.getItem("watched")
      ? JSON.parse(sessionStorage.getItem("watched"))
      : [];
  }

  //  store the Watched data into the Storage everytime the watched piece of state is Updated
  useEffect(() => {
    sessionStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return [watched, setWatched];
}
