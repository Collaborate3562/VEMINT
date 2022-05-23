import React from "react";
import IconLogo from "../../assets/images/logo.png";
const Logo = (props) => {
  const { className } = props;

  return (
    <div className={`${className} flex justify-center items-center`}>
      <img src={IconLogo} className="w-16 h-16" alt="back dot" />
      <h4 className="font-bold text-4xl text-white">VeMint</h4>
    </div>
  );
};

export default Logo;
