import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/core/SwitchUnstyled";
import IcoPlue from "../../assets/images/ico_plus.svg";
import Label from "../label";

const Root = styled("span")`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #b3c3d3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 30px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: #007fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

export const OutlineButton = (props) => {
  const { onClick, children } = props;
  return (
    <button
      className=" border-2 px-3 py-2 text-white w-max rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

OutlineButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export const PrimaryButton = (props) => {
  const { onClick, children, className } = props;
  return (
    <button
      className={`bg-app-green100 px-3 py-2 text-white  rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export const SwitchButton = (props) => {
  return (<SwitchUnstyled component={Root} />)
};



export const CreateButton = (props) => {
  const { onClick, type } = props;
  return (
    <div
      className="w-64 h-52 border-2 border-app-gray100 rounded-md items-center flex justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="text-center flex flex-col items-center jusitfy-center gap-5">
        <div className="relative flex w-14 h-14 items-center justify-center">
          <img src={IcoPlue} />
          <h1 className="text-black absolute text-5xl z-10 text-bold flex">
            +
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <Label type="large">Create</Label>
          <Label>VIP-181</Label>
        </div>
      </div>
    </div>
  );
};

CreateButton.propTypes = {
  onClick: PropTypes.func,
};