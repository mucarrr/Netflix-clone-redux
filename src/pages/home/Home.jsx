import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Loader from "../../components/Loader";
import api from "../../utils/api";
import Movielist from "./Movielist";

const Home = () => {
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get("genre/movie/list")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <div>
      <Hero />
      {error ? (
        <Error info={error} />
      ) : !genres ? (
        <Loader />
      ) : (
        <div>
          {genres.map((genre) => (
            <Movielist key={genre.id} genre={genre} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
