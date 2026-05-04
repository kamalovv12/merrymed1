import img1 from "../../assets/img/home/services/1.jpg";
import img2 from "../../assets/img/home/services/2.jpg";
import img3 from "../../assets/img/home/services/3.jpg";
import Card from "../../components/Card";
import useLocales from "../../hooks/useLocales";

const Services = () => {
  const { t } = useLocales();
  return (
    <div className="flex justify-center p-10 flex-wrap gap-5 mt-10 md:p-1">
      <div className="w-full p-t-[1rem] relative z-11 flex flex-row justify-center items-center gap-8 l:flex-col mx-auto ">
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
      </div>
      <div className="w-1/2 md:w-full md:px-2 items-center flex flex-col gap-3 my-5 ">
        <h3 className="typography-2 font-bold text-nowrap ">
          {t("WHAT WE DO")}
        </h3>
        <p className="text-center font-light w-full md:!w-full">
          {t(
            "our vision is to be and be perceived as a leading and responsible pharmaceutical company in the CIS countries. We manufacture, export and market high quality medicines at reasonable prices."
          )}
        </p>
      </div>
    </div>
  );
};

export default Services;
