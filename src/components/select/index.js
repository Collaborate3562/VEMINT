import React from "react";
import PropTypes from "prop-types";
import Label from "../label";

const Selector = (props) => {
  const{data} = props
  console.log(data)
  return (
    <div className="w-full bg-app-gray100 p-5 rounded-md">
      <select className="w-full bg-transparent text-white outline-none gap-4">
        {data.map((item, idx) => (
          <option key={idx} className="bg-app-gray100">{item}</option>
        ))}
      </select>
    </div>
  );
};

Selector.propTypes = {
  selectiondata: PropTypes.array,
};

export const SelectorUnit = (props) => {
  const {
    label,
    value,
    desc,
    onChange,
    placeholder,
    className,
    topdesc,
    info,
    selectiondata,
  } = props;

  return (
    <div className={`gap-1 flex flex-col ${className} w-full`}>
      <h4 className="text-white">{label}</h4>
      {topdesc && (
        <Label className="pb-8" info={info}>
          {desc}
        </Label>
      )}
      <Selector data={selectiondata} />
      {!topdesc && <Label>{desc}</Label>}
    </div>
  );
};

SelectorUnit.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  desc: PropTypes.string,
  placeholder: PropTypes.string,
  topdesc: PropTypes.bool,
  info: PropTypes.func,
  selectiondata: PropTypes.array,
};

SelectorUnit.defaultProps = {
  topdesc: false,
  textarea: false,
};
