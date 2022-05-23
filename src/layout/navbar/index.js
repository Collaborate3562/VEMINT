import React from "react";
import { OutlineButton } from "../../components/buttons";
import Logo from "../../components/logo";
import NavMenuItem from "../../components/menuitem";
import { Menu } from "./menu";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Logo />
      <div className="flex  items-center gap-10">
        <div className="flex items-baseline gap-10 mt-3">
          {Menu.map((data, idx) => (
            <NavMenuItem key={idx} menudata={data} />
          ))}
        </div>
        <OutlineButton>Connect Wallet</OutlineButton>
      </div>
    </div>
  );
};

export default Navbar;
