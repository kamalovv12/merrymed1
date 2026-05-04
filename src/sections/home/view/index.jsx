import GetInTouch from "../GetInTouch";
import Header from "../Header";
import QualityControll from "../QualityControll";
import { Divider } from "@nextui-org/react";
import Services from "../Services";
import Badges from "../Badges";
import "./animation.css";
import About from "../About";
import CompInfo from "../CompInfo";

const index = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <div className="w-full h-full md:hidden container-x-axis absolute top-0 left-[50%] -translate-x-[50%] flex flex-row justify-between items-center">
          <Divider orientation="vertical" className="bg-black opacity-10 " />
          <Divider orientation="vertical" className="bg-black opacity-10" />
          <Divider orientation="vertical" className="bg-black opacity-10 " />
          <Divider orientation="vertical" className="bg-black opacity-10 " />
        </div>
        <About />
        <Badges />
        <Services />
        <QualityControll />
        <CompInfo />
        <GetInTouch />
      </div>
    </>
  );
};

export default index;
