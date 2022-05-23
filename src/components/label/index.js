import React from "react";
import PropTypes from "prop-types";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
const Label = (prop) => {
  const { type, children, className, info } = prop;
  return (
    <div className={`flex gap-10 items-center ${className}`}  >
      <label
        className={`${
          type === "primary"
            ? "text-app-green100 text-lg"
            : type === "large"
            ? "text-white text-lg"
            : "text-app-gray300 text-sm"
        }
      `}
      >
        {children}
      </label>
      {info !== undefined && (
        <ErrorOutlineOutlinedIcon className="text-gray-500 cursor-pointer" onClick={info}/>
      )}
    </div>
  );
};

Label.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  info: PropTypes.func,
};

Label.defaultProps = {
  type: "normal",
  info: undefined,
};

export default Label;
