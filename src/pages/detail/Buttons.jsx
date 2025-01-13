import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Buttons = ({ movie }) => {
  return (
    <div className="flex mb-5 justify-between">
      <Link
        to={".."}
        className="bg-gray-600 hero-btn !min-w-0 px-5 hover:bg-gray-700"
      >
        <MdOutlineKeyboardArrowLeft className="text-xl " /> Back
      </Link>
      <Button movie={movie} />
    </div>
  );
};

export default Buttons;
