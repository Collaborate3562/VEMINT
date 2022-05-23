import React, { useState } from "react";
import { OutlineButton, PrimaryButton } from "../../components/buttons";
import { InputUnit } from "../../components/input";
import Label from "../../components/label";
import Layout from "../../layout/layout";
import "./page.css";
import { tokensData } from "./tokens";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { RoundedPreview } from "../../components/preview";

const HomePage = () => {
  const [token, setToken] = useState("");

  const [expand, setExpand] = useState(false);

  return (
    <Layout>
      <div className="flex flex-col w-10/12 mx-auto">
        <div className="flex justify-center flex-col mt-32 items-center">
          <h1 className="text-center text-6xl font-semibold text-white font-isocteur-normal">
            Create a Token
          </h1>
        </div>
        <div className="flex flex-col gap-5 bg-black px-20 py-16 border-2 rounded-md border-gray-600 mt-20">
          <InputUnit
            value={token}
            onChange={(e) => setToken(e.taget.value)}
            label="Token Name*"
            desc="Choose a name for your token."
            placeholder="Your token name"
          />
          <InputUnit
            value={token}
            onChange={(e) => setToken(e.taget.value)}
            label="Token Symbol*"
            desc="Symbol should be 3-4 characters long."
            placeholder="ABC"
          />
          <InputUnit
            value={token}
            onChange={(e) => setToken(e.taget.value)}
            label="Token decimals*"
            desc="Decimal precision of your token. Set by default to 18."
            placeholder="18"
          />
          <InputUnit
            value={token}
            onChange={(e) => setToken(e.taget.value)}
            label="Token Name*"
            desc="Insert the initial number of tokens you would like to creat, This will b e deopsited in your account."
            placeholder="Enter the amount of tokens"
          />
          <div className="sidebar-nav">
            <div className="sidebar-nav-menu">
              <div
                className={`sidebar-nav-menu-item ${
                  expand ? "item-active" : ""
                }`}
                data-id="expand"
              >
                <div
                  className="text-white font-semibold text-md bg-gradient-to-r from-app-green100 to-app-green200 p-5 h-16 rounded-md items-center justify-between flex "
                  onClick={() => setExpand(!expand)}
                >
                  <span className="sidebar-nav-menu-item-head-title">
                    Advance Options
                  </span>
                  {expand ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                <div className="sidebar-nav-menu-item-body border-2 p-10 rounded-b-md border-gray-600">
                  <InputUnit
                    value={token}
                    onChange={(e) => setToken(e.taget.value)}
                    label="Owner address*"
                    desc="This Vechain address will receive all the issued token and all admin privilege."
                    placeholder="Enter the Vechain address here"
                  />
                  <div className="mt-5">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white text-sm">
                        Select a token type*
                      </h4>
                      <Label>
                        Each contract has its own partifularities and abilities:
                      </Label>
                    </div>
                    <div className="bg-app-gray100 rounded-md divide-y-2 divide-app-gray200 ">
                      {tokensData.map((data, idx) => (
                        <div className="flex p-5 gap-4" key={idx}>
                          <input type="checkbox" className="w-6 h-6" />
                          <div className="flex flex-col gap-3">
                            <div>
                              <img src={data.iconurl} alt="icon" />
                              <h4 className="text-white">{data.name}</h4>
                            </div>
                            <h4 className="text-app-gray200">
                              {data.descripion}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Label type="large">Logo</Label>
              <Label>
                This logo image will be displayed as your token Logo . 350 x 350
                recommended.
              </Label>
            </div>
            <RoundedPreview />
          </div>

          <div className="mt-32">
            <PrimaryButton>Create Token</PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
