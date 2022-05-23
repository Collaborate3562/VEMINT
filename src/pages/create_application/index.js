import React, { useState } from "react";
import {
  OutlineButton,
  PrimaryButton,
  SwitchButton,
} from "../../components/buttons";
import { InputUnit } from "../../components/input";
import Label from "../../components/label";
import { RoundedPreview, SquarePreview } from "../../components/preview";
import SocialLink from "../../components/social_link";
import Layout from "../../layout/layout";
import IcoSite from "../../assets/icons/ico_web.svg";
import IcoDiscord from "../../assets/icons/ico_discord.svg";
import IcoTwitter from "../../assets/icons/ico_twitter.svg";
import IcoInstagram from "../../assets/icons/ico_instagram.svg";
import IcoMedium from "../../assets/icons/ico_medium.svg";
import IcoTelegram from "../../assets/icons/ico_telegram.svg";
import ThemeSelector from "../../components/theme";
import IcoVechain from "../../assets/icons/ico_vechain.svg";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
const CreateApplication = () => {
  const [selected, setSelected] = useState(-1);
  return (
    <Layout>
      <div>
        <h3 className="text-6xl text-white text-center mt-44 text-semibold font-isocteur-normal font-semibold">
          Create your collection
        </h3>
        <div className="flex flex-col gap-20 mt-20">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Label type="large">Logo Image*</Label>
              <Label>
                This image will also be used for navigation. 350 x 350
                recommended.
              </Label>
            </div>
            <RoundedPreview />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Label type="large">Featured image</Label>
              <Label>
                This image will be used for featuring your collection on the
                homepage, category pages, or other promotional areas of VeChain.
                600 x 400 recommended.
              </Label>
            </div>
            <SquarePreview type="normal" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Label type="large">Banner image</Label>
              <Label>
                This image will appear at the top of your collection page. Avoid
                including too much text in this banner image, as the dimensions
                change on different services. 1400 x 400 recommended.
              </Label>
            </div>
            <SquarePreview type="large" />
          </div>
          <div>
            <InputUnit
              label="Name*"
              placeholder="Example : Treasurer of the sea "
              className="w-99"
            />
          </div>
          <div>
            <InputUnit
              label="URL"
              placeholder="https://"
              className="w-99"
              desc="Markdown syntax is supported. 0 or 1000 characters used. "
              topdesc={true}
            />
          </div>
          <div>
            <InputUnit
              label="Description"
              className="w-99"
              desc="Customize your URL on VeChain. Must only contain lowercase letters, numbers, and hyphens. "
              topdesc={true}
              textarea={true}
            />
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-1">
              <Label type="large">Category</Label>
              <Label>
                Adding a category will help make your item discoverable on
                VeMint.
              </Label>
            </div>
            <OutlineButton>Add Category</OutlineButton>
          </div>
          <div className="w-99 flex flex-col gap-5">
            <SocialLink icon={IcoSite} placeholder="yoursite" />
            <SocialLink
              icon={IcoDiscord}
              placeholder="https://discord.gg/abcdef"
            />
            <SocialLink
              icon={IcoTwitter}
              placeholder="https://twitter.com/yourtwitterhandle"
            />
            <SocialLink
              icon={IcoInstagram}
              placeholder="https://www.instagram.com/yourinstagramhandle"
            />
            <SocialLink
              icon={IcoMedium}
              placeholder="https://www.medium.com/@yourmediumhandle"
            />
            <SocialLink icon={IcoTelegram} placeholder="https://t.me/abcdef" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Label type="large">Royalities</Label>
              <Label>
                Collect a fee when a user re-sells an item you originally
                created. This is deducted from the final sale price and paid
                monthly to a payout address of your choosing. Learn More
              </Label>
            </div>
            <InputUnit
              desc="Percentage fee"
              topdesc={true}
              placeholder="0.00"
              className="w-99"
            />
          </div>
          <div className="w-99">
            <InputUnit
              desc="Select the Vechain where you'd like new items from this collection to be added by default. "
              placeholder="Vechain"
              label="Vechain"
              topdesc={true}
              icon={IcoVechain}
              info={()=>{console.log("some action")}}
            />
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex flex-col gap-1">
              <Label type="large">Display theme</Label>
              <Label>Change how your items are shown.</Label>
            </div>
            <div className="flex gap-5">
              <ThemeSelector
                type={0}
                index={0}
                selected={selected}
                onClick={() => setSelected(0)}
              />
              <ThemeSelector
                type={1}
                index={1}
                selected={selected}
                onClick={() => setSelected(1)}
              />
              <ThemeSelector
                type={2}
                index={2}
                selected={selected}
                onClick={() => setSelected(2)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex gap-44 items-end ">
              <div className="flex flex-col gap-1">
                <Label type="large">Explicit & sensitive content</Label>
                <div className="flex gap-10 items-center ">
                  <Label>
                    See this collection as explicit and sensitive content
                  </Label>
                  <ErrorOutlineOutlinedIcon  className="text-gray-500 cursor-pointer"/>
                </div>
              </div>
              <SwitchButton />
            </div>
            <PrimaryButton className="w-44">Create</PrimaryButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateApplication;
