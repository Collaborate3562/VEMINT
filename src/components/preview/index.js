import React from "react";
import IcoImage from "../../assets/images/ico_img.svg";

import PropTypes from "prop-types";

export const RoundedPreview = () => {
  return (
    <div className="w-52 h-52 rounded-full border-2 flex items-center justify-center cursor-pointer border-app-gray100 ">
      <img src={IcoImage} alt="preview icon" />
    </div>
  );
};

export const SquarePreview = (props) => {
  const { onClick, type } = props;
  return (
    <div
      className={`${
        type === "normal" ? "w-96 h-64" : "w-99 h-80"
      } rounded-md border-2 border-app-gray100 flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      <img src={IcoImage} alt="preview icon" />
    </div>
  );
};

SquarePreview.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};

SquarePreview.defaultProps = {
  type: "normal",
};

