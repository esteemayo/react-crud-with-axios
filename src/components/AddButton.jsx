import React from "react";
import { useLocation } from "react-router-dom";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddButton = ({ onAdd, onShow }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <button onClick={onAdd} className={onShow ? "close-post" : "add-post"}>
          {onShow ? <FaTimes /> : <FaPlus />}
        </button>
      )}
    </>
  );
};

export default AddButton;
