import React from "react";
import { OutlineButton, PrimaryButton } from "../../components/buttons";
import Layout from "../../layout/layout";

const LandingPage = () => {
  return (
    <Layout>
      <div className="text-center text-white flex gap-10 mt-40 flex-col " style={{minHeight:"calc(100vh - 38rem)"}}>
        <div className="flex justify-center flex-col mt-32 items-center">
          <h1 className="text-center text-6xl font-semibold text-white font-isocteur-normal">
            Welcome to VeMint
          </h1>
          <h3 className="text-sm text-white text-center mt-4 ">
            Easily deploy smart contracts on the
            <span className="text-app-yellow100"> Vechain blockchain</span>
          </h3>
          <div className="flex gap-5 mt-10">
            <PrimaryButton>Check Out The Code</PrimaryButton>
            <OutlineButton>Check out What You Can Do</OutlineButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
