import React, { Fragment, useState, useEffect } from "react";

export const FetchGithub = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch("https://api.github.com/users/workshopsjsmvd");
    res
      .json()
      .then(res => setData(res))
      .catch(err => setError(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const { location, name } = data;

  if (error || typeof location === "undefined" || typeof name === "undefined") {
    return <h1>Ha ocurrio un error, intenta mas tarde.</h1>;
  }

  return (
    <Fragment>
      <h1 key="name">{`Nombre: ${name}`}</h1>
      <h2 key="location">{`País: ${location}`}</h2>
    </Fragment>
  );
};
