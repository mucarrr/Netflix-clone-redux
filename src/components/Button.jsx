import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { GoBookmarkSlashFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toogleMovieList } from "../redux/action/ListActions";

const Button = ({ movie }) => {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store);
  const isAdded = list.find((item) => item.id == movie.id);
  const handleClick = () => {
    dispatch(toogleMovieList(movie, !isAdded));
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="hero-btn bg-blue-600 hover:bg-blue-700"
      >
        {isAdded ? (
          <div className="flex items-center gap-2">
            <GoBookmarkSlashFill /> Remove From the List
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <BsBookmarkPlusFill /> Add to My List
          </div>
        )}
      </button>
    </div>
  );
};

export default Button;
