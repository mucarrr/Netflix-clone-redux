import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Buttons from "./Buttons";
import Banner from "./Banner";
import Content from "./Content";
import Actors from "./Actors";
import Trailers from "./Trailers";

const Detail = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos",
      cache: Date.now(),
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);
  console.log(movie);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;
  return (
    <div>
      <Buttons movie={movie} />
      <Banner movie={movie} />
      <Content movie={movie} />
      <Actors cast={movie.credits.cast} />
      <Trailers videos={movie.videos.results} />
    </div>
  );
};

export default Detail;
