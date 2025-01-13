import React from "react";
import { Link } from "react-router-dom";
import List from "./List";
import millify from "millify";

const Content = ({ movie }) => {
  return (
    <div className="my-10 grid md:grid-cols-2 gap-5 md:gap-10">
      <div>
        <List title="Categories" arr={movie.genres} />
        <List title="Spoken Languages" arr={movie.spoken_languages} />
        <List title="Production Companies" arr={movie.production_companies} />
        <List title="Production Countries" arr={movie.production_countries} />
      </div>
      <div>
        <p>{movie.overview}</p>
        <p>
          <span>Budget: </span>
          <span className="text-green-500 font-semibold">
            {movie.budget === 0 ? "unknown" : "$" + millify(movie.budget)}
          </span>
        </p>

        <p>
          <span>Revenues: </span>
          <span className="text-green-500 font-semibold">
            {movie.revenue === 0 ? "unknown" : "$" + millify(movie.revenue)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Content;
