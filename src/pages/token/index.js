import React, { useState } from "react";
import { CreateButton, PrimaryButton } from "../../components/buttons";
import { InputUnit, UnderlineInputUnit } from "../../components/input";
import Label from "../../components/label";
import { Creater, SquarePreview } from "../../components/preview";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout/layout";
import { SelectorUnit } from "../../components/select";

const TokenPage = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="">
        <div className="w-full">
          <h2 className="text-white text-6xl font-semibold mt-20 font-isocteur-normal font-isocteur-normal">
            Create Single Item
          </h2>
          <div className="w-full flex gap-10">
            <div className="w-2/3 flex flex-col ">
              <div className="mt-20 flex flex-col gap-3">
                <h4 className="text-md text-white">Upload file</h4>
                <div className="flex justify-center items-center py-20 rounded-md  border-4 border-app-gray100 bg-black">
                  <div className="flex justify-center items-center gap-5 flex-col">
                    <Label>PNG, GIF, WEBP, MP4 or MP3, Max 100mb</Label>
                    <PrimaryButton>Choose File</PrimaryButton>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 mt-20">
              <h4 className="text-md text-white">Preview</h4>
              <div className="border-2 rounded-md justify-center items-center p-20 bg-black border-app-gray100 mt-3 w-96 h-96 flex text-center">
                <Label>Upload file to preview your brand new NFT</Label>
              </div>
            </div>
          </div>
          <CreateButton onClick={() => navigate("/create")} />
          <div className="w-1/2 flex flex-col mt-10 gap-10">
            <UnderlineInputUnit
              label="Name*"
              placeholder='e.g. "Readdmable T-Shirt with Logo"'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <UnderlineInputUnit
              label="Description (Optional)"
              placeholder='e.g. "After purchasing you will be able to get the real T-Shirt"'
              desk="With preserved line-breaks"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <UnderlineInputUnit
              label="Royalities"
              placeholder="10"
              desk="With preserved line-breaks"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div>
              <SelectorUnit
                label="Collection"
                desc="This is the collection where your item will appear"
                topdesc={true}
                info={() => {
                  console.log("something");
                }}
                selectiondata={["A","B","C"]}
              />
            </div>
          </div>

          
          <div className="mt-20">
            <PrimaryButton>Create Item</PrimaryButton>
          </div>
        </div>
        <div className="grid grid-cols-2 "></div>
      </div>
    </Layout>
  );
};

export default TokenPage;
