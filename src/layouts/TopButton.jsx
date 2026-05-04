import { useEffect, useState } from "react";
import ArrowUp from "../svg/ArrowUp";

const TopButton = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!isShow) return <></>;
  return (
    <div className="fixed bottom-[1rem] z-[50] right-[1rem] ">
      <button
        className="bg-primary  w-[30px] h-[30px] flex items-center justify-center  rounded-[15px] text-white"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUp fill="#fff" />
      </button>
    </div>
  );
};

export default TopButton;
