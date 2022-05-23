import React from "react";
import PropTypes from "prop-types";

const NavMenuItem = (props) => {
  const { menudata } = props;
  return (
    <div>
      <a
        className="flex flex-col items-center justify-start cursor-pointer text-white font-semibold "
        href={`${menudata.path}`}
      >
        <h4>{menudata.title}</h4>
        <h5 className="text-xs">{menudata.description}</h5>
      </a>
    </div>
  );
};

NavMenuItem.propTypes = {
  menudata: PropTypes.object,
};

NavMenuItem.defaultProps = {
  menudata: {
    title: "",
    path: "/",
  },
};

export default NavMenuItem;
