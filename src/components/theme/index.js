import React from "react";
import Label from "../label";
import PropTypes from "prop-types";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const themes = [
  {
    label: "Padded",
    desc: "Recommended for assets with transparent background.",
  },
  {
    label: "Contained",
    desc: "Recommended for assets that are not a 1:1 ratio",
  },
  {
    label: "Covered",
    desc: "Recommended for assets that can be extend to the edge",
  },
];

const ThemeSelector = (props) => {
  const { type, selected, onClick, index } = props;
  return (
    <div className="relative flex" onClick={onClick}>
      {selected === index && (
        <div className="rounded-full bg-white border-2 flex w-max absolute right-0 top-0">
          <CheckCircleIcon className="text-app-green100" />
        </div>
      )}
      <div className={`border-2 ${selected === index?"":"border-app-gray100"} rounded-md w-64 h-56 flex justify-center items-center flex-col gap-5 m-2`}>
        <div className="gap-2 flex ">
          <div className="border-2 rounded-md border-app-gray100 divide-app-gray100 divide-y-2 w-16 h-24">
            <div className="h-16 items-center flex justify-center">
              {type === 0 ? (
                <div className="rounded-md bg-app-gray100 w-8 h-8 m-auto"></div>
              ) : type === 1 ? (
                <div className="rounded-md bg-app-gray100 w-3/4 h-full m-auto"></div>
              ) : (
                <div className=" bg-app-gray100 w-full h-full m-auto"></div>
              )}
            </div>
            <div className="flex flex-col gap-1 p-1">
              <div className="w-2/3 rounded-full h-1.5 bg-app-gray100"></div>
              <div className="w-4/5 rounded-full h-1.5 bg-app-gray100"></div>
            </div>
          </div>
          <div className="border-2 rounded-md border-app-gray100 divide-app-gray100 divide-y-2 w-16 h-24">
            <div className="h-16 items-center flex justify-center">
              {type === 0 ? (
                <div className="rounded-md bg-app-gray100 w-8 h-8 m-auto"></div>
              ) : type === 1 ? (
                <div className="rounded-md bg-app-gray100 w-3/4 h-full m-auto"></div>
              ) : (
                <div className=" bg-app-gray100 w-full h-full m-auto"></div>
              )}
            </div>
            <div className="flex flex-col gap-1 p-1">
              <div className="w-2/3 rounded-full h-1.5 bg-app-gray100"></div>
              <div className="w-4/5 rounded-full h-1.5 bg-app-gray100"></div>
            </div>
          </div>
          <div className="border-2 rounded-md border-app-gray100 divide-app-gray100 divide-y-2 w-16 h-24">
            <div className="h-16 items-center flex justify-center">
              {type === 0 ? (
                <div className="rounded-md bg-app-gray100 w-8 h-8 m-auto"></div>
              ) : type === 1 ? (
                <div className="rounded-md bg-app-gray100 w-3/4 h-full m-auto"></div>
              ) : (
                <div className=" bg-app-gray100 w-full h-full m-auto"></div>
              )}
            </div>
            <div className="flex flex-col gap-1 p-1">
              <div className="w-2/3 rounded-full h-1.5 bg-app-gray100"></div>
              <div className="w-4/5 rounded-full h-1.5 bg-app-gray100"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center">
          <Label type="large">{themes[type].label}</Label>
          <Label>{themes[type].desc}</Label>
        </div>
      </div>
    </div>
  );
};

ThemeSelector.propTypes = {
  selected: PropTypes.bool,
  type: PropTypes.number,
  selected:PropTypes.number,
};

ThemeSelector.defaultProps = {
  type: 0,
  selected:-1
};

export default ThemeSelector;
