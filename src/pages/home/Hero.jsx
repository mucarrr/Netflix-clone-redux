import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

import { baseImgUrl } from "../../utils/constants";
import Button from "../../components/Button";

const Hero = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        const i = Math.round(Math.random() * 20);
        setMovie(res.data.results[i]);
      })
      .catch((err) => setError(err));
  }, []);
  if (error) return <Error />;
  if (!movie) return <Loader />;

  return (
    <div className="grid md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold ">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview}</p>
        <p>
          <span>IMDB: </span>
          <span className="text-yellow-400 font-semibold">
            {movie.vote_average.toFixed(2)}
          </span>
        </p>
        <div className="flex gap-5">
          <Link to={`/movie/${movie.id}`} className="hero-btn">
            <FaPlay /> Watch the Film
          </Link>
          <Button movie={movie} />
        </div>
      </div>
      <div>
        <img
          src={baseImgUrl + movie.backdrop_path}
          className="drop-shadow-[0_0_80px_rgba(255,255,255, 0.4)] my-4 rounded object-contain max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
