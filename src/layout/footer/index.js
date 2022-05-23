import React from "react";
import { OutlineButton } from "../../components/buttons";
import Label from "../../components/label";
import HandymanIcon from "@mui/icons-material/Handyman";
import MessageIcon from "@mui/icons-material/Message";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
const Footer = () => {
  return (
    <div className="w-full flex border-t-2 h-56 px-20 pb-20 mt-20">
      <div className="flex w-full pt-10">
        <div className="w-1/3 items-start flex gap-5 ">
          <OutlineButton>Create Token</OutlineButton>
          <OutlineButton>Create NFT</OutlineButton>
        </div>
        <div className="w-1/3 items-start flex flex-col ">
          <div className="flex mx-auto flex-col gap-5">
            <Label type="primary">Help & Support</Label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <HandymanIcon
                  sx={{ fontSize: 15 }}
                  className="text-white text-sm"
                />
                <Label>Manage my token</Label>
              </div>
              <div className="flex items-center gap-1">
                <MessageIcon sx={{ fontSize: 15 }} className="text-white" />
                <Label>Contact Us</Label>
              </div>
              <div className="flex items-center gap-1">
                <LightbulbIcon sx={{ fontSize: 15 }} className="text-white" />
                <Label>FAQ</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 items-start flex flex-col gap-5">
          <Label type="primary">Legal</Label>
          <Label>Terms & Conditions</Label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
